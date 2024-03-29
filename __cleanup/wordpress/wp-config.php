<?php

define('DB_NAME', 'articleeditor');
define('DB_USER', 'articleeditor');
define('DB_PASSWORD', 'articleeditor');

// define('DB_HOST', 'localhost');
define( 'DB_HOST', '127.0.0.1' );


define('WP_DEBUG', true);
define( 'SCRIPT_DEBUG', true );
define( 'WP_DEBUG_LOG', true );

define('WPCF7_AUTOP', false);

define('CACHE_READ_WHITELIST','_transient|posts WHERE ID IN|limit_login_'); // do not read from cache is sql contains these
define('CACHE_WRITE_WHITELIST','_transient|limit_login_'); // do not reset cache if sql contains these

define('DB_CHARSET', 'utf8mb4');
define('DB_COLLATE', 'utf8mb4_unicode_ci');

$table_prefix  = 'nammk_';

define('DISALLOW_FILE_EDIT', true);
define('FS_METHOD', 'direct');

define('AUTH_KEY',         'B]9_9_%uF{fdsasgC)pMx/?-+_bVjX;Xrib=1y23rgghdh3a+dadAEIZ1O/z^2Gv`<GLr<7hKI');
define('SECURE_AUTH_KEY',  'Gasgb43@t+eWU&NhkNXw1daVO,adsa>mFU*kC^;8NAi0&;2RIz}a>:uO0[yU_0Cr<IPep&GG0U');
define('LOGGED_IN_KEY',    'PvbNzyB^Z?fl|Kad..Du#4/|Y{iV|ntR22zndahar534L!k)T%~vU[5Tv4Vf*4D<m GXp#wAK_');
define('NONCE_KEY',        'ubFTsbbd34Pf{Bi(ZU^QC!FM=.Qr*|id+i4#/Wvr[tasda~n+RYcs<5I8U+d:C%cb]|d]!|~R=');
define('AUTH_SALT',        '/b2p2we%Gc-NSSxg]R2|P3=+m_*das5mq]a`vc<BZFfg12zsghjhn|^scLAJzF!U@1Lpx1yJhD');
define('SECURE_AUTH_SALT', 'DGqahU{$#{1])WF?2d1{+v4mWhES6`o@))*asdaGcCa(t,+j~0+je]{`7fHc-=k!IC[U{1bjh-');
define('LOGGED_IN_SALT',   '@a*]7xfnT!asd$-,Cw{~{Y~j38>jv!,]v%tr6jVRrH2:A)asrty3sg&56yuYZ=j+k>u@6`M|A}');
define('NONCE_SALT',       '6jyK<[n:Wbnl)`;q2E:eVhp:[ez<+=|-xPadysegg5435g4n?WzGdEIfHqrFjeqV#zl|(oWv<4');

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
