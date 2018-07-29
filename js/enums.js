var E = {
	"RPL_WELCOME": 1,
	"RPL_YOURHOST": 2,
	"RPL_CREATED": 3,
	"RPL_MYINFO": 4,
	"RPL_ISUPPORT": 5,
	"RPL_SNOMASK": 8,
	"RPL_STATMEMTOT": 9,
	"RPL_BOUNCE": 10,
	"RPL_YOURCOOKIE": 14,
	"RPL_YOURID": 42,
	"RPL_SAVENICK": 43,
	"RPL_ATTEMPTINGJUNC": 50,
	"RPL_ATTEMPTINGREROUTE": 51,
	"RPL_TRACELINK": 200,
	"RPL_TRACECONNECTING": 201,
	"RPL_TRACEHANDSHAKE": 202,
	"RPL_TRACEUNKNOWN": 203,
	"RPL_TRACEOPERATOR": 204,
	"RPL_TRACEUSER": 205,
	"RPL_TRACESERVER": 206,
	"RPL_TRACESERVICE": 207,
	"RPL_TRACENEWTYPE": 208,
	"RPL_TRACECLASS": 209,
	"RPL_STATS": 210,
	"RPL_STATSLINKINFO": 211,
	"RPL_STATSCOMMANDS": 212,
	"RPL_STATSCLINE": 213,
	"RPL_STATSILINE": 215,
	"RPL_STATSKLINE": 216,
	"RPL_STATSYLINE": 218,
	"RPL_ENDOFSTATS": 219,
	"RPL_UMODEIS": 221,
	"RPL_SERVLIST": 234,
	"RPL_SERVLISTEND": 235,
	"RPL_STATSVERBOSE": 236,
	"RPL_STATSENGINE": 237,
	"RPL_STATSIAUTH": 239,
	"RPL_STATSLLINE": 241,
	"RPL_STATSUPTIME": 242,
	"RPL_STATSOLINE": 243,
	"RPL_STATSHLINE": 244,
	"RPL_STATSSLINE": 245,
	"RPL_STATSTLINE": 246,
	"RPL_STATSBLINE": 247,
	"RPL_STATSPLINE": 249,
	"RPL_STATSCONN": 250,
	"RPL_LUSERCLIENT": 251,
	"RPL_LUSEROP": 252,
	"RPL_LUSERUNKNOWN": 253,
	"RPL_LUSERCHANNELS": 254,
	"RPL_LUSERME": 255,
	"RPL_ADMINME": 256,
	"RPL_ADMINLOC1": 257,
	"RPL_ADMINLOC2": 258,
	"RPL_ADMINEMAIL": 259,
	"RPL_TRACELOG": 261,
	"RPL_TRYAGAIN": 263,
	"RPL_LOCALUSERS": 265,
	"RPL_GLOBALUSERS": 266,
	"RPL_START_NETSTAT": 267,
	"RPL_NETSTAT": 268,
	"RPL_END_NETSTAT": 269,
	"RPL_PRIVS": 270,
	"RPL_SILELIST": 271,
	"RPL_ENDOFSILELIST": 272,
	"RPL_NOTIFY": 273,
	"RPL_VCHANEXIST": 276,
	"RPL_VCHANLIST": 277,
	"RPL_VCHANHELP": 278,
	"RPL_GLIST": 280,
	"RPL_CHANINFO_KICKS": 296,
	"RPL_END_CHANINFO": 299,
	"RPL_NONE": 300,
	"RPL_AWAY": 301,
	"RPL_USERHOST": 302,
	"RPL_ISON": 303,
	"RPL_UNAWAY": 305,
	"RPL_NOWAWAY": 306,
	"RPL_WHOISUSER": 311,
	"RPL_WHOISSERVER": 312,
	"RPL_WHOISOPERATOR": 313,
	"RPL_WHOWASUSER": 314,
	"RPL_ENDOFWHO": 315,
	"RPL_WHOISIDLE": 317,
	"RPL_ENDOFWHOIS": 318,
	"RPL_WHOISCHANNELS": 319,
	"RPL_WHOISVIRT": 320,
	"RPL_LIST": 322,
	"RPL_LISTEND": 323,
	"RPL_CHANNELMODEIS": 324,
	"RPL_NOCHANPASS": 326,
	"RPL_CHPASSUNKNOWN": 327,
	"RPL_CHANNEL_URL": 328,
	"RPL_CREATIONTIME": 329,
	"RPL_WHOISACCOUNT": 330,
	"RPL_NOTOPIC": 331,
	"RPL_TOPIC": 332,
	"RPL_TOPICWHOTIME": 333,
	"RPL_BADCHANPASS": 339,
	"RPL_USERIP": 340,
	"RPL_INVITING": 341,
	"RPL_INVITED": 345,
	"RPL_INVITELIST": 346,
	"RPL_ENDOFINVITELIST": 347,
	"RPL_EXCEPTLIST": 348,
	"RPL_ENDOFEXCEPTLIST": 349,
	"RPL_VERSION": 351,
	"RPL_WHOREPLY": 352,
	"RPL_NAMREPLY": 353,
	"RPL_WHOSPCRPL": 354,
	"RPL_NAMREPLY_": 355,
	"RPL_LINKS": 364,
	"RPL_ENDOFLINKS": 365,
	"RPL_ENDOFNAMES": 366,
	"RPL_BANLIST": 367,
	"RPL_ENDOFBANLIST": 368,
	"RPL_ENDOFWHOWAS": 369,
	"RPL_INFO": 371,
	"RPL_MOTD": 372,
	"RPL_ENDOFINFO": 374,
	"RPL_MOTDSTART": 375,
	"RPL_ENDOFMOTD": 376,
	"RPL_WHOISHOST": 378,
	"RPL_YOUREOPER": 381,
	"RPL_REHASHING": 382,
	"RPL_YOURESERVICE": 383,
	"RPL_NOTOPERANYMORE": 385,
	"RPL_ALIST": 388,
	"RPL_ENDOFALIST": 389,
	"RPL_TIME": 391,
	"RPL_USERSSTART": 392,
	"RPL_USERS": 393,
	"RPL_ENDOFUSERS": 394,
	"RPL_NOUSERS": 395,
	"RPL_HOSTHIDDEN": 396,
	"ERR_UNKNOWNERROR": 400,
	"ERR_NOSUCHNICK": 401,
	"ERR_NOSUCHSERVER": 402,
	"ERR_NOSUCHCHANNEL": 403,
	"ERR_CANNOTSENDTOCHAN": 404,
	"ERR_TOOMANYCHANNELS": 405,
	"ERR_WASNOSUCHNICK": 406,
	"ERR_TOOMANYTARGETS": 407,
	"ERR_NOSUCHSERVICE": 408,
	"ERR_NOORIGIN": 409,
	"ERR_NORECIPIENT": 411,
	"ERR_NOTEXTTOSEND": 412,
	"ERR_NOTOPLEVEL": 413,
	"ERR_WILDTOPLEVEL": 414,
	"ERR_BADMASK": 415,
	"ERR_TOOMANYMATCHES": 416,
	"ERR_QUERYTOOLONG": 416,
	"ERR_LENGTHTRUNCATED": 419,
	"ERR_UNKNOWNCOMMAND": 421,
	"ERR_NOMOTD": 422,
	"ERR_NOADMININFO": 423,
	"ERR_FILEERROR": 424,
	"ERR_NOOPERMOTD": 425,
	"ERR_TOOMANYAWAY": 429,
	"ERR_EVENTNICKCHANGE": 430,
	"ERR_NONICKNAMEGIVEN": 431,
	"ERR_ERRONEUSNICKNAME": 432,
	"ERR_NICKNAMEINUSE": 433,
	"ERR_NICKCOLLISION": 436,
	"ERR_TARGETTOOFAST": 439,
	"ERR_SERVICESDOWN": 440,
	"ERR_USERNOTINCHANNEL": 441,
	"ERR_NOTONCHANNEL": 442,
	"ERR_USERONCHANNEL": 443,
	"ERR_NOLOGIN": 444,
	"ERR_SUMMONDISABLED": 445,
	"ERR_USERSDISABLED": 446,
	"ERR_NONICKCHANGE": 447,
	"ERR_NOTIMPLEMENTED": 449,
	"ERR_NOTREGISTERED": 451,
	"ERR_IDCOLLISION": 452,
	"ERR_NICKLOST": 453,
	"ERR_HOSTILENAME": 455,
	"ERR_ACCEPTFULL": 456,
	"ERR_ACCEPTEXIST": 457,
	"ERR_ACCEPTNOT": 458,
	"ERR_NOHIDING": 459,
	"ERR_NOTFORHALFOPS": 460,
	"ERR_NEEDMOREPARAMS": 461,
	"ERR_ALREADYREGISTERED": 462,
	"ERR_NOPERMFORHOST": 463,
	"ERR_PASSWDMISMATCH": 464,
	"ERR_YOUREBANNEDCREEP": 465,
	"ERR_KEYSET": 467,
	"ERR_LINKSET": 469,
	"ERR_CHANNELISFULL": 471,
	"ERR_UNKNOWNMODE": 472,
	"ERR_INVITEONLYCHAN": 473,
	"ERR_BANNEDFROMCHAN": 474,
	"ERR_BADCHANNELKEY": 475,
	"ERR_BADCHANMASK": 476,
	"ERR_BANLISTFULL": 478,
	"ERR_BADCHANNAME": 479,
	"ERR_LINKFAIL": 479,
	"ERR_NOPRIVILEGES": 481,
	"ERR_CHANOPRIVSNEEDED": 482,
	"ERR_CANTKILLSERVER": 483,
	"ERR_UNIQOPRIVSNEEDED": 485,
	"ERR_TSLESSCHAN": 488,
	"ERR_NOOPERHOST": 491,
	"ERR_NOFEATURE": 493,
	"ERR_BADFEATURE": 494,
	"ERR_BADLOGTYPE": 495,
	"ERR_BADLOGSYS": 496,
	"ERR_BADLOGVALUE": 497,
	"ERR_ISOPERLCHAN": 498,
	"ERR_CHANOWNPRIVNEEDED": 499,
	"ERR_UMODEUNKNOWNFLAG": 501,
	"ERR_USERSDONTMATCH": 502,
	"ERR_GHOSTEDCLIENT": 503,
	"ERR_USERNOTONSERV": 504,
	"ERR_SILELISTFULL": 511,
	"ERR_TOOMANYWATCH": 512,
	"ERR_BADPING": 513,
	"ERR_BADEXPIRE": 515,
	"ERR_DONTCHEAT": 516,
	"ERR_DISABLED": 517,
	"ERR_WHOSYNTAX": 522,
	"ERR_WHOLIMEXCEED": 523,
	"ERR_REMOTEPFX": 525,
	"ERR_PFXUNROUTABLE": 526,
	"ERR_BADHOSTMASK": 550,
	"ERR_HOSTUNAVAIL": 551,
	"ERR_USINGSLINE": 552,
	"RPL_LOGON": 600,
	"RPL_LOGOFF": 601,
	"RPL_WATCHOFF": 602,
	"RPL_WATCHSTAT": 603,
	"RPL_NOWON": 604,
	"RPL_NOWOFF": 605,
	"RPL_WATCHLIST": 606,
	"RPL_ENDOFWATCHLIST": 607,
	"RPL_WATCHCLEAR": 608,
	"RPL_ISLOCOP": 611,
	"RPL_ISNOTOPER": 612,
	"RPL_ENDOFISOPER": 613,
	"RPL_DCCLIST": 618,
	"RPL_OMOTDSTART": 624,
	"RPL_OMOTD": 625,
	"RPL_ENDOFO": 626,
	"RPL_SETTINGS": 630,
	"RPL_ENDOFSETTINGS": 631,
	"RPL_TRACEROUTE_HOP": 660,
	"RPL_TRACEROUTE_START": 661,
	"RPL_MODECHANGEWARN": 662,
	"RPL_CHANREDIR": 663,
	"RPL_SERVMODEIS": 664,
	"RPL_OTHERUMODEIS": 665,
	"RPL_ENDOF_GENERIC": 666,
	"RPL_WHOWASDETAILS": 670,
	"RPL_WHOISSECURE": 671,
	"RPL_UNKNOWNMODES": 672,
	"RPL_CANNOTSETMODES": 673,
	"RPL_LUSERSTAFF": 678,
	"RPL_TIMEONSERVERIS": 679,
	"RPL_NETWORKS": 682,
	"RPL_YOURLANGUAGEIS": 687,
	"RPL_LANGUAGE": 688,
	"RPL_WHOISSTAFF": 689,
	"RPL_WHOISLANGUAGE": 690,
	"RPL_MODLIST": 702,
	"RPL_ENDOFMODLIST": 703,
	"RPL_HELPSTART": 704,
	"RPL_HELPTXT": 705,
	"RPL_ENDOFHELP": 706,
	"RPL_ETRACEFULL": 708,
	"RPL_ETRACE": 709,
	"RPL_KNOCK": 710,
	"RPL_KNOCKDLVR": 711,
	"ERR_TOOMANYKNOCK": 712,
	"ERR_CHANOPEN": 713,
	"ERR_KNOCKONCHAN": 714,
	"ERR_KNOCKDISABLED": 715,
	"RPL_TARGUMODEG": 716,
	"RPL_TARGNOTIFY": 717,
	"RPL_UMODEGMSG": 718,
	"RPL_OMOTDSTART": 720,
	"RPL_OMOTD": 721,
	"RPL_ENDOFOMOTD": 722,
	"ERR_NOPRIVS": 723,
	"RPL_TESTMARK": 724,
	"RPL_TESTLINE": 725,
	"RPL_NOTESTLINE": 726,
	"RPL_QLIST": 728,
	"RPL_XINFO": 771,
	"RPL_XINFOSTART": 773,
	"RPL_XINFOEND": 774,
	"SASL_MESSAGE": 900,
	"SASL_AUTH_SUCCESS": 903,
	"ERR_CANNOTDOCOMMAND": 972,
	"ERR_CANNOTCHANGEUMODE": 973,
	"ERR_CANNOTCHANGECHANMODE": 974,
	"ERR_CANNOTCHANGESERVERMODE": 975,
	"ERR_CANNOTSENDTONICK": 976,
	"ERR_UNKNOWNSERVERMODE": 977,
	"ERR_SERVERMODELOCK": 979,
	"ERR_BADCHARENCODING": 980,
	"ERR_TOOMANYLANGUAGES": 981,
	"ERR_NOLANGUAGE": 982,
	"ERR_TEXTTOOSHORT": 983
}