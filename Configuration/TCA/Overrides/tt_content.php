<?php
defined('TYPO3_MODE') || die();


// normalizing the header and headers palette to be the same
$GLOBALS['TCA']['tt_content']['palettes']['header'] = $GLOBALS['TCA']['tt_content']['palettes']['headers'];


\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns(
    'tt_content', array(
        'background_color' => array(
            'exclude' => 1,
            'label' => 'LLL:EXT:theme/Resources/Private/Language/locallang_db.xlf:theme.tt_content.background_color',
            'config' => array(
                'type' => 'select',
                'renderType' => 'selectSingle',
                'items' => array(
                    array('LLL:EXT:theme/Resources/Private/Language/locallang_db.xlf:theme.tt_content.background_color.0', '0'),
                    array('LLL:EXT:theme/Resources/Private/Language/locallang_db.xlf:theme.tt_content.background_color.1', '1'),
                    array('LLL:EXT:theme/Resources/Private/Language/locallang_db.xlf:theme.tt_content.background_color.2', '2'),
                    array('LLL:EXT:theme/Resources/Private/Language/locallang_db.xlf:theme.tt_content.background_color.3', '3'),
                    array('LLL:EXT:theme/Resources/Private/Language/locallang_db.xlf:theme.tt_content.background_color.4', '4'),
                )
            )
        ),
        'content_max_width' => array(
            'exclude' => 1,
            'displayCond' => 'FIELD:colPos:!=:-1',
            'label' => 'LLL:EXT:theme/Resources/Private/Language/locallang_db.xlf:theme.tt_content.content_max_width',
            'config' => array(
                'type' => 'select',
                'renderType' => 'selectSingle',
                'items' => array(
                    array('LLL:EXT:theme/Resources/Private/Language/locallang_db.xlf:theme.tt_content.content_max_width.0', '0'),
                    array('LLL:EXT:theme/Resources/Private/Language/locallang_db.xlf:theme.tt_content.content_max_width.1', '1'),
                    array('LLL:EXT:theme/Resources/Private/Language/locallang_db.xlf:theme.tt_content.content_max_width.100', '100'),
                )
            )
        ),
    )
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
    'tt_content',
    'frames',
    'background_color, content_max_width'
);

$GLOBALS['TCA']['tt_content']['columns']['space_before_class']['config']['default'] = 'small';
$GLOBALS['TCA']['tt_content']['columns']['space_after_class']['config']['default'] = 'small';