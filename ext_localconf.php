<?php
defined('TYPO3_MODE') or die();

/**
 *  Add default Typoscript without sys_template
 */
// hook is missing
// $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['Core/TypoScript/TemplateService']['runThroughTemplatesPostProcessing'][] = \Svendeka\Core\Hooks\TypoScriptHook::class . '->addCustomTypoScriptTemplate';


/**
 * non-cachable Functions from ExtensionManagementUtility go here.
 *
 * Everything else has to be put into TCA overrides these days.
 * a helpful list can be found here:
 * https://blog.plan2.net/2016/05/11/tca-konfiguration-und-der-typo3-cache/
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:theme/Configuration/TsConfig/Page/root.t3s">');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:theme/Configuration/TsConfig/User/common.t3s">');


$extConf = unserialize($GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY]);

/**
 * Adding TS for Gridelements if needed
 */
// TODO: why is it $_extConfig not $extConfig ???
if($extConf['gridelements']['enable'] ==1 && $_extConfig['gridelements']['defaultConfiguration'] !== '') {
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptSetup('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_extConfig['gridelements']['defaultConfiguration'] . '">');
}

//CK Editor: Custom Configuration
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['custom1'] = 'EXT:theme/Configuration/Yaml/rte/Custom1.yaml';

// theme viewHelpers register globally
$GLOBALS['TYPO3_CONF_VARS']['SYS']['fluid']['namespaces']['theme'] = ['Svendeka\\Theme\\ViewHelpers'];
