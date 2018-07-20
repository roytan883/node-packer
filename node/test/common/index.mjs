// Flags: --experimental-modules
/* eslint-disable node-core/required-modules */
import common from './index.js';

const {
  PORT,
  isMainThread,
  isWindows,
  isWOW64,
  isAIX,
  isLinuxPPCBE,
  isSunOS,
  isFreeBSD,
  isOpenBSD,
  isLinux,
  isOSX,
  isGlibc,
  enoughTestMem,
  enoughTestCpu,
  rootDir,
  buildType,
  localIPv6Hosts,
  opensslCli,
  PIPE,
  hasIPv6,
  childShouldThrowAndAbort,
  ddCommand,
  spawnPwd,
  spawnSyncPwd,
  platformTimeout,
  allowGlobals,
  leakedGlobals,
  mustCall,
  mustCallAtLeast,
  mustCallAsync,
  hasMultiLocalhost,
  fileExists,
  skipIfEslintMissing,
  canCreateSymLink,
  getCallSite,
  mustNotCall,
  printSkipMessage,
  skip,
  ArrayStream,
  nodeProcessAborted,
  busyLoop,
  isAlive,
  noWarnCode,
  expectWarning,
  expectsError,
  skipIfInspectorDisabled,
  skipIf32Bits,
  getArrayBufferViews,
  getBufferSources,
  crashOnUnhandledRejection,
  getTTYfd,
  runWithInvalidFD,
  hijackStdout,
  hijackStderr,
  restoreStdout,
  restoreStderr,
  isCPPSymbolsNotMapped
} = common;

export {
  PORT,
  isMainThread,
  isWindows,
  isWOW64,
  isAIX,
  isLinuxPPCBE,
  isSunOS,
  isFreeBSD,
  isOpenBSD,
  isLinux,
  isOSX,
  isGlibc,
  enoughTestMem,
  enoughTestCpu,
  rootDir,
  buildType,
  localIPv6Hosts,
  opensslCli,
  PIPE,
  hasIPv6,
  childShouldThrowAndAbort,
  ddCommand,
  spawnPwd,
  spawnSyncPwd,
  platformTimeout,
  allowGlobals,
  leakedGlobals,
  mustCall,
  mustCallAtLeast,
  mustCallAsync,
  hasMultiLocalhost,
  fileExists,
  skipIfEslintMissing,
  canCreateSymLink,
  getCallSite,
  mustNotCall,
  printSkipMessage,
  skip,
  ArrayStream,
  nodeProcessAborted,
  busyLoop,
  isAlive,
  noWarnCode,
  expectWarning,
  expectsError,
  skipIfInspectorDisabled,
  skipIf32Bits,
  getArrayBufferViews,
  getBufferSources,
  crashOnUnhandledRejection,
  getTTYfd,
  runWithInvalidFD,
  hijackStdout,
  hijackStderr,
  restoreStdout,
  restoreStderr,
  isCPPSymbolsNotMapped
};