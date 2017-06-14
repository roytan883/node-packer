'use strict';
require('../common');
const assert = require('assert');
const http = require('http');
const url = require('url');

const cookies = [
  'session_token=; path=/; expires=Sun, 15-Sep-2030 13:48:52 GMT',
  'prefers_open_id=; path=/; expires=Thu, 01-Jan-1970 00:00:00 GMT'
];

const headers = {'content-type': 'text/plain',
                 'set-cookie': cookies,
                 'hello': 'world' };

const backend = http.createServer(function(req, res) {
  console.error('backend request');
  res.writeHead(200, headers);
  res.write('hello world\n');
  res.end();
});

const proxy = http.createServer(function(req, res) {
  console.error('proxy req headers: ' + JSON.stringify(req.headers));
  http.get({
    port: backend.address().port,
    path: url.parse(req.url).pathname
  }, function(proxy_res) {

    console.error('proxy res headers: ' + JSON.stringify(proxy_res.headers));

    assert.strictEqual('world', proxy_res.headers['hello']);
    assert.strictEqual('text/plain', proxy_res.headers['content-type']);
    assert.deepStrictEqual(cookies, proxy_res.headers['set-cookie']);

    res.writeHead(proxy_res.statusCode, proxy_res.headers);

    proxy_res.on('data', function(chunk) {
      res.write(chunk);
    });

    proxy_res.on('end', function() {
      res.end();
      console.error('proxy res');
    });
  });
});

let body = '';

let nlistening = 0;
function startReq() {
  nlistening++;
  if (nlistening < 2) return;

  http.get({
    port: proxy.address().port,
    path: '/test'
  }, function(res) {
    console.error('got res');
    assert.strictEqual(200, res.statusCode);

    assert.strictEqual('world', res.headers['hello']);
    assert.strictEqual('text/plain', res.headers['content-type']);
    assert.deepStrictEqual(cookies, res.headers['set-cookie']);

    res.setEncoding('utf8');
    res.on('data', function(chunk) { body += chunk; });
    res.on('end', function() {
      proxy.close();
      backend.close();
      console.error('closed both');
    });
  });
  console.error('client req');
}

console.error('listen proxy');
proxy.listen(0, startReq);

console.error('listen backend');
backend.listen(0, startReq);

process.on('exit', function() {
  assert.strictEqual(body, 'hello world\n');
});
