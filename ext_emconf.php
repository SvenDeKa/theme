<?php
$EM_CONF[$_EXTKEY] = array(
    'title' => 'THEME',
    'description' => 'The Customized behaviour of this website',
    'category' => 'misc',
    'author' => 'TEAM23',
    'author_email' => 'info@team23.de',
    'author_company' => 'TEAM23',
    'state' => 'stable',
    'uploadfolder' => '0',
    'createDirs' => '',
    'clearCacheOnLoad' => 0,
    'version' => '8.7.0',
    'constraints' => array(
        'depends' => array(
            'typo3' => '>= 10.4',
            'vhs' => '>= 4.4.0',
//            'core' => '>=8.7.0',
        ),
        'conflicts' => array(
        ),
        'suggests' => array(
        ),
    ),
);
