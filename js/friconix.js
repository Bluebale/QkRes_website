var paths={'home':'M 552 42C 690 179 827 316 964 454C 997 476 978 514 953 533C 928 554 909 588 875 593C 875 593 875 834 875 834C 879 871 865 917 823 923C 759 928 694 924 629 925C 598 928 562 921 551 887C 548 833 551 779 550 725C 550 725 450 725 450 725C 450 725 450 846 450 846C 453 877 446 913 412 924C 346 927 279 924 213 925C 174 930 128 910 126 866C 124 775 126 684 125 593C 93 590 77 559 55 540C 34 520 1 492 27 463C 148 341 270 219 392 98C 425 69 451 23 500 21C 519 21 538 29 552 42C 552 42 552 42 552 42M 490 74C 490 74 484 77 484 77C 346 213 210 351 73 488C 73 488 125 540 125 540C 234 431 343 321 452 212C 470 191 501 168 527 192C 644 308 759 424 875 540C 875 540 927 488 927 488C 807 368 687 248 567 128C 545 109 528 80 500 71C 500 71 490 74 490 74M 175 561C 174 644 175 727 175 810C 178 831 167 859 185 873C 252 877 319 874 385 875C 408 880 398 852 400 839C 402 794 396 749 404 706C 419 666 464 676 497 675C 532 677 580 665 596 706C 604 745 598 786 600 826C 602 842 595 862 604 875C 604 875 763 875 763 875C 783 871 819 886 825 859C 825 759 825 660 825 561C 717 452 608 344 500 235C 392 344 283 452 175 561C 175 561 175 561 175 561','facebook-circle':'M 733 205C 733 205 733 332 733 332C 733 332 658 332 658 332C 599 332 587 360 587 402C 587 402 587 493 587 493C 587 493 728 493 728 493C 728 493 710 635 710 635C 710 635 587 635 587 635C 587 635 587 992 587 992C 558 997 529 1000 500 1000C 480 1000 460 999 440 996C 440 996 440 635 440 635C 440 635 317 635 317 635C 317 635 317 493 317 493C 317 493 440 493 440 493C 440 493 440 388 440 388C 440 266 514 199 623 199C 675 199 720 203 733 205C 733 205 733 205 733 205','linkedin':'M 336 332C 336 332 336 789 336 789C 336 789 211 789 211 789C 211 789 211 332 211 332C 211 332 336 332 336 332M 346 206C 346 206 346 206 346 206C 346 247 313 280 273 280C 233 280 201 247 201 206C 201 166 233 133 273 133C 313 133 346 166 346 206M 834 508C 834 508 834 789 834 789C 834 789 709 789 709 789C 709 789 709 556 709 556C 709 416 543 427 543 556C 543 556 543 789 543 789C 543 789 419 789 419 789C 419 789 419 332 419 332C 419 332 543 332 543 332C 543 332 543 406 543 406C 601 298 834 290 834 508'}
var shapes={xxx:'',xtl:'',xnl:'',xwl:'',xtp:'M 0 0C 0 0 0 18 0 18C 0 18 982 1000 982 1000C 982 1000 1000 1000 1000 1000C 1000 1000 1000 982 1000 982C 1000 982 18 0 18 0C 18 0 0 0 0 0C 0 0 0 0 0 0',xnp:'M 0 0C 0 0 0 35 0 35C 0 35 965 1000 965 1000C 965 1000 1000 1000 1000 1000C 1000 1000 1000 965 1000 965C 1000 965 35 0 35 0C 35 0 0 0 0 0C 0 0 0 0 0 0',xwp:'M 0 0C 0 0 0 53 0 53C 0 53 947 1000 947 1000C 947 1000 1000 1000 1000 1000C 1000 1000 1000 947 1000 947C 1000 947 53 0 53 0C 53 0 0 0 0 0C 0 0 0 0 0 0',xts:'',xns:'',xws:'',ttl:'M 500 0C 482 0 465 9 456 26C 456 26 5 930 5 930C -11 964 16 999 50 1000C 50 1000 950 1000 950 1000C 986 1000 1010 959 995 930C 995 930 545 27 545 27C 536 9 518 0 500 0C 500 0 500 0 500 0M 500 25C 510 25 518 29 523 38C 523 38 973 941 973 941C 979 952 967 975 950 975C 950 975 950 975 950 975C 950 975 51 975 51 975C 34 975 19 959 27 940C 27 940 477 37 477 37C 482 29 490 25 500 25C 500 25 500 25 500 25',tnl:'M 500 0C 474 0 448 14 433 42C 433 42 9 890 9 890C -16 939 15 1000 75 1000C 75 1000 925 1000 925 1000C 967 1001 1021 951 991 891C 991 891 567 42 567 42C 551 14 525 0 500 0C 500 0 500 0 500 0M 500 50C 508 50 516 52 523 66C 523 66 947 913 947 913C 954 928 951 931 945 939C 940 946 927 950 927 950C 927 950 926 950 925 950C 925 950 75 950 75 950C 75 950 75 950 75 950C 62 950 57 946 53 939C 49 932 48 922 53 911C 53 911 476 66 476 66C 484 53 492 50 500 50C 500 50 500 50 500 50',twl:'M 502 0C 467 0 432 18 411 56C 411 56 12 852 12 852C -25 924 29 1000 100 1000C 100 1000 900 1000 900 1000C 979 1001 1023 912 987 851C 987 851 591 57 591 57C 571 19 536 0 502 0C 502 0 502 0 502 0M 501 75C 509 75 516 77 525 92C 525 92 921 884 921 884C 921 885 922 887 923 888C 929 900 924 925 901 925C 901 925 900 925 900 925C 900 925 100 925 100 925C 100 925 100 925 99 925C 82 925 64 914 79 886C 79 885 79 885 79 885C 79 885 476 92 476 92C 485 77 493 75 501 75C 501 75 501 75 501 75',ttp:'M 500 0C 482 0 465 9 456 26C 456 26 5 930 5 930C -11 964 16 999 50 1000C 50 1000 950 1000 950 1000C 986 1000 1010 959 995 930C 995 930 545 27 545 27C 536 9 518 0 500 0C 500 0 500 0 500 0M 500 25C 510 25 518 29 523 38C 523 38 973 941 973 941C 975 945 975 950 973 956C 973 956 337 319 337 319C 337 319 477 37 477 37C 482 29 490 25 500 25C 500 25 500 25 500 25M 325 343C 325 343 956 974 956 974C 954 975 952 975 950 975C 950 975 950 975 950 975C 950 975 51 975 51 975C 34 975 19 959 27 940C 27 940 325 343 325 343C 325 343 325 343 325 343',tnp:'M 500 0C 474 0 448 14 433 42C 433 42 9 890 9 890C -16 939 15 1000 75 1000C 75 1000 925 1000 925 1000C 967 1001 1021 951 991 891C 991 891 567 42 567 42C 551 14 525 0 500 0C 500 0 500 0 500 0M 500 50C 508 50 516 52 523 66C 523 66 945 910 945 910C 945 910 351 316 351 316C 351 316 476 66 476 66C 484 53 492 50 500 50C 500 50 500 50 500 50M 327 363C 327 363 915 950 915 950C 915 950 75 950 75 950C 75 950 75 950 75 950C 62 950 57 946 53 939C 49 932 48 922 53 911C 53 911 327 363 327 363C 327 363 327 363 327 363',twp:'M 502 0C 467 0 432 18 411 56C 411 56 12 852 12 852C -25 924 29 1000 100 1000C 100 1000 900 1000 900 1000C 979 1001 1023 912 987 851C 987 851 591 57 591 57C 571 19 536 0 502 0C 502 0 502 0 502 0M 501 75C 509 75 516 77 525 92C 525 92 904 851 904 851C 904 851 366 312 366 312C 366 312 476 92 476 92C 485 77 493 75 501 75C 501 75 501 75 501 75M 330 383C 330 383 872 925 872 925C 872 925 100 925 100 925C 100 925 100 925 99 925C 82 925 64 914 79 886C 79 885 79 885 79 885C 79 885 330 383 330 383C 330 383 330 383 330 383M 100 1000C 100 1000 900 1000 900 1000C 900 1000 100 1000 100 1000C 100 1000 100 1000 100 1000',tts:'M 500 0C 482 0 465 9 456 26C 456 26 5 930 5 930C -11 964 16 999 50 1000C 50 1000 950 1000 950 1000C 986 1000 1010 959 995 930C 995 930 545 27 545 27C 536 9 518 0 500 0C 500 0 500 0 500 0',tns:'M 500 0C 474 0 448 14 433 42C 433 42 9 890 9 890C -16 939 15 1000 75 1000C 75 1000 925 1000 925 1000C 967 1001 1021 951 991 891C 991 891 567 42 567 42C 551 14 525 0 500 0C 500 0 500 0 500 0',tws:'M 502 0C 467 0 432 18 411 56C 411 56 12 852 12 852C -25 924 29 1000 100 1000C 100 1000 900 1000 900 1000C 979 1001 1023 912 987 851C 987 851 591 57 591 57C 571 19 536 0 502 0C 502 0 502 0 502 0',etl:'M 500 50C 482 50 466 59 457 75C 457 75 7 863 7 863C -12 896 12 938 50 938C 50 938 950 938 950 938C 988 938 1012 896 993 863C 993 863 543 75 543 75C 532 59 517 50 500 50C 500 50 500 50 500 50M 501 75C 509 75 517 80 521 87C 521 87 971 875 971 875C 981 893 970 913 950 913C 950 913 50 913 50 913C 30 913 19 893 29 875C 29 875 29 875 29 875C 29 875 29 875 29 875C 29 875 479 87 479 87C 484 79 490 75 501 75C 501 75 500 75 500 75',enl:'M 499 50C 464 50 431 69 413 100C 413 100 13 788 13 788C -5 819 -5 857 13 888C 31 919 64 938 100 938C 100 938 900 938 900 938C 936 938 969 919 987 888C 1005 857 1005 819 987 788C 987 788 587 100 587 100C 570 70 539 52 505 50C 503 50 501 50 499 50C 499 50 499 50 499 50M 500 100C 501 100 502 100 502 100C 520 101 535 110 544 125C 544 125 944 813 944 813C 953 828 953 847 944 863C 935 878 918 888 900 888C 900 888 100 888 100 888C 82 888 65 878 56 863C 47 847 47 828 56 813C 56 813 456 125 456 125C 465 109 482 100 500 100C 500 100 500 100 500 100',ewl:'M 499 43C 446 43 397 71 370 118C 370 118 20 724 20 724C -7 770 -7 827 20 874C 47 920 96 949 150 949C 150 949 850 949 850 949C 904 949 953 920 980 874C 1007 827 1007 770 980 724C 980 724 630 118 630 118C 604 73 558 45 507 43C 504 43 502 43 499 43C 499 43 499 43 499 43M 500 118C 501 118 502 118 503 118C 529 120 552 133 564 155C 564 155 914 762 914 762C 928 785 928 813 914 836C 914 836 914 836 914 836C 901 859 877 873 850 873C 850 873 150 873 150 873C 123 873 99 859 86 836C 72 813 72 785 86 762C 86 762 436 155 436 155C 449 133 472 119 498 118C 499 118 499 118 500 118C 500 118 500 118 500 118',etp:'M 500 50C 482 50 466 59 457 75C 457 75 7 863 7 863C -12 896 12 938 50 938C 50 938 950 938 950 938C 988 938 1012 896 993 863C 993 863 543 75 543 75C 532 59 517 50 500 50C 500 50 500 50 500 50M 500 75C 500 75 501 75 501 75C 509 75 517 80 521 87C 521 87 971 875 971 875C 981 893 970 913 950 913C 950 913 930 913 930 913C 930 913 352 309 352 309C 352 309 479 87 479 87C 484 79 490 75 500 75C 500 75 500 75 500 75M 339 332C 339 332 896 913 896 913C 896 913 50 913 50 913C 30 913 19 893 29 875C 29 875 29 875 29 875C 29 875 29 875 29 875C 29 875 339 332 339 332C 339 332 339 332 339 332',enp:'M 499 50C 464 50 431 69 413 100C 413 100 13 788 13 788C -5 819 -5 857 13 888C 31 919 64 938 100 938C 100 938 900 938 900 938C 936 938 969 919 987 888C 1005 857 1005 819 987 788C 987 788 587 100 587 100C 570 70 539 52 505 50C 503 50 501 50 499 50C 499 50 499 50 499 50M 500 100C 501 100 502 100 502 100C 520 101 535 110 544 125C 544 125 944 813 944 813C 953 828 953 847 944 863C 938 872 929 880 919 884C 919 884 918 882 918 882C 918 882 347 312 347 312C 347 312 456 125 456 125C 465 109 482 100 500 100C 500 100 500 100 500 100M 321 357C 321 357 852 888 852 888C 852 888 100 888 100 888C 82 888 65 878 56 863C 47 847 47 828 56 813C 56 813 321 357 321 357C 321 357 321 357 321 357',ewp:'M 499 43C 446 43 397 71 370 118C 370 118 20 724 20 724C -7 770 -7 827 20 874C 47 920 96 949 150 949C 150 949 850 949 850 949C 904 949 953 920 980 874C 1007 827 1007 770 980 724C 980 724 630 118 630 118C 604 73 558 45 507 43C 504 43 502 43 499 43C 499 43 499 43 499 43M 500 118C 501 118 502 118 503 118C 529 120 552 133 564 155C 564 155 914 762 914 762C 928 785 928 813 914 836C 914 836 914 836 914 836C 911 841 908 846 903 850C 903 850 353 299 353 299C 353 299 436 155 436 155C 449 133 472 119 498 118C 499 118 499 118 500 118C 500 118 500 118 500 118M 314 367C 314 367 820 873 820 873C 820 873 150 873 150 873C 123 873 99 859 86 836C 72 813 72 785 86 762C 86 762 314 367 314 367C 314 367 314 367 314 367',ets:'M 500 50C 482 50 466 59 457 75C 457 75 7 863 7 863C -12 896 12 938 50 938C 50 938 950 938 950 938C 988 938 1012 896 993 863C 993 863 543 75 543 75C 532 59 517 50 500 50C 500 50 500 50 500 50',ens:'M 499 50C 464 50 431 69 413 100C 413 100 13 788 13 788C -5 819 -5 857 13 888C 31 919 64 938 100 938C 100 938 900 938 900 938C 936 938 969 919 987 888C 1005 857 1005 819 987 788C 987 788 587 100 587 100C 570 70 539 52 505 50C 503 50 501 50 499 50C 499 50 499 50 499 50',ews:'M 499 43C 446 43 397 71 370 118C 370 118 20 724 20 724C -7 770 -7 827 20 874C 47 920 96 949 150 949C 150 949 850 949 850 949C 904 949 953 920 980 874C 1007 827 1007 770 980 724C 980 724 630 118 630 118C 604 73 558 45 507 43C 504 43 502 43 499 43C 499 43 499 43 499 43',ctl:'M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0M 500 25C 762 25 975 238 975 500C 975 762 762 975 500 975C 238 975 25 762 25 500C 25 238 238 25 500 25C 500 25 500 25 500 25',cnl:'M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0M 500 50C 749 50 950 251 950 500C 950 749 749 950 500 950C 251 950 50 749 50 500C 50 251 251 50 500 50C 500 50 500 50 500 50',cwl:'M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0M 500 75C 735 75 925 265 925 500C 925 735 735 925 500 925C 265 925 75 735 75 500C 75 265 265 75 500 75C 500 75 500 75 500 75',ctp:'M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0M 500 25C 762 25 975 238 975 500C 975 627 925 742 845 827C 845 827 173 155 173 155C 258 75 373 25 500 25C 500 25 500 25 500 25M 155 173C 155 173 827 845 827 845C 742 925 627 975 500 975C 238 975 25 762 25 500C 25 373 75 258 155 173C 155 173 155 173 155 173',cnp:'M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0M 500 50C 749 50 950 251 950 500C 950 615 907 720 835 800C 835 800 200 165 200 165C 280 93 385 50 500 50C 500 50 500 50 500 50M 165 200C 165 200 800 835 800 835C 720 907 615 950 500 950C 251 950 50 749 50 500C 50 385 93 280 165 200C 165 200 165 200 165 200',cwp:'M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0M 500 75C 735 75 925 265 925 500C 925 604 888 699 826 773C 826 773 227 174 227 174C 301 112 396 75 500 75C 500 75 500 75 500 75M 174 227C 174 227 773 826 773 826C 699 888 604 925 500 925C 265 925 75 735 75 500C 75 396 112 301 174 227C 174 227 174 227 174 227',cts:'M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0',cns:'M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0',cws:'M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0',stl:'M 50 0C 22 0 0 22 0 50C 0 50 0 950 0 950C 0 978 22 1000 50 1000C 50 1000 950 1000 950 1000C 978 1000 1000 978 1000 950C 1000 950 1000 50 1000 50C 1000 22 978 0 950 0C 950 0 50 0 50 0C 50 0 50 0 50 0M 50 25C 50 25 950 25 950 25C 964 25 975 36 975 50C 975 50 975 950 975 950C 975 964 964 975 950 975C 950 975 50 975 50 975C 36 975 25 964 25 950C 25 950 25 50 25 50C 25 36 36 25 50 25C 50 25 50 25 50 25',snl:'M 75 0C 75 0 75 0 75 0C 33 0 0 33 0 75C 0 75 0 925 0 925C 0 967 33 1000 75 1000C 75 1000 925 1000 925 1000C 967 1000 1000 967 1000 925C 1000 925 1000 75 1000 75C 1000 33 967 0 925 0C 925 0 75 0 75 0M 75 50C 75 50 925 50 925 50C 939 50 950 61 950 75C 950 75 950 925 950 925C 950 939 939 950 925 950C 925 950 75 950 75 950C 61 950 50 939 50 925C 50 925 50 75 50 75C 50 61 61 50 75 50',swl:'M 100 0C 45 0 0 45 0 100C 0 100 0 900 0 900C 0 955 45 1000 100 1000C 100 1000 900 1000 900 1000C 955 1000 1000 955 1000 900C 1000 900 1000 100 1000 100C 1000 45 955 0 900 0C 900 0 100 0 100 0C 100 0 100 0 100 0M 100 75C 100 75 900 75 900 75C 914 75 925 86 925 100C 925 100 925 900 925 900C 925 914 914 925 900 925C 900 925 100 925 100 925C 86 925 75 914 75 900C 75 900 75 100 75 100C 75 86 86 75 100 75C 100 75 100 75 100 75',stp:'M 50 0C 22 0 0 22 0 50C 0 50 0 950 0 950C 0 978 22 1000 50 1000C 50 1000 950 1000 950 1000C 978 1000 1000 978 1000 950C 1000 950 1000 50 1000 50C 1000 22 978 0 950 0C 950 0 50 0 50 0C 50 0 50 0 50 0M 50 25C 50 25 950 25 950 25C 964 25 975 36 975 50C 975 50 975 950 975 950C 975 952 975 954 974 956C 974 956 44 26 44 26C 46 25 48 25 50 25C 50 25 50 25 50 25M 26 44C 26 44 956 974 956 974C 954 975 952 975 950 975C 950 975 50 975 50 975C 36 975 25 964 25 950C 25 950 25 50 25 50C 25 48 25 46 26 44C 26 44 26 44 26 44',snp:'M 75 0C 33 0 0 33 0 75C 0 75 0 925 0 925C 0 967 33 1000 75 1000C 75 1000 925 1000 925 1000C 967 1000 1000 967 1000 925C 1000 925 1000 75 1000 75C 1000 33 967 0 925 0C 925 0 75 0 75 0C 75 0 75 0 75 0M 85 50C 85 50 925 50 925 50C 939 50 950 61 950 75C 950 75 950 915 950 915C 950 915 85 50 85 50C 85 50 85 50 85 50M 50 85C 50 85 915 950 915 950C 915 950 75 950 75 950C 61 950 50 939 50 925C 50 925 50 85 50 85C 50 85 50 85 50 85',swp:'M 100 0C 45 0 0 45 0 100C 0 100 0 900 0 900C 0 955 45 1000 100 1000C 100 1000 900 1000 900 1000C 955 1000 1000 955 1000 900C 1000 900 1000 100 1000 100C 1000 45 955 0 900 0C 900 0 100 0 100 0C 100 0 100 0 100 0M 128 75C 128 75 900 75 900 75C 914 75 925 86 925 100C 925 100 925 872 925 872C 925 872 128 75 128 75C 128 75 128 75 128 75M 75 128C 75 128 872 925 872 925C 872 925 100 925 100 925C 86 925 75 914 75 900C 75 900 75 128 75 128C 75 128 75 128 75 128',sts:'M 50 0C 22 0 0 22 0 50C 0 50 0 950 0 950C 0 978 22 1000 50 1000C 50 1000 950 1000 950 1000C 978 1000 1000 978 1000 950C 1000 950 1000 50 1000 50C 1000 22 978 0 950 0C 950 0 50 0 50 0C 50 0 50 0 50 0',sns:'M 75 0C 75 0 75 0 75 0C 33 0 0 33 0 75C 0 75 0 925 0 925C 0 967 33 1000 75 1000C 75 1000 925 1000 925 1000C 967 1000 1000 967 1000 925C 1000 925 1000 75 1000 75C 1000 33 967 0 925 0C 925 0 75 0 75 0',sws:'M 100 0C 45 0 0 45 0 100C 0 100 0 900 0 900C 0 955 45 1000 100 1000C 100 1000 900 1000 900 1000C 955 1000 1000 955 1000 900C 1000 900 1000 100 1000 100C 1000 45 955 0 900 0C 900 0 100 0 100 0C 100 0 100 0 100 0',htl:'M 275 60C 257 60 241 70 232 85C 232 85 7 475 7 475C -2 490 -2 510 7 525C 7 525 232 915 232 915C 241 930 257 940 275 940C 275 940 725 940 725 940C 743 940 759 930 768 915C 768 915 993 525 993 525C 1002 510 1002 490 993 475C 993 475 768 85 768 85C 759 70 743 60 725 60C 725 60 275 60 275 60C 275 60 275 60 275 60M 275 85C 275 85 275 85 275 85C 275 85 725 85 725 85C 734 85 742 90 747 98C 747 98 972 487 972 487C 976 495 976 505 972 513C 972 513 747 902 747 902C 742 910 734 915 725 915C 725 915 275 915 275 915C 266 915 258 910 253 902C 253 902 28 513 28 513C 28 513 28 513 28 513C 24 505 24 495 28 487C 28 487 28 487 28 487C 28 487 253 98 253 98C 258 90 266 85 275 85C 275 85 275 85 275 85',hnl:'M 300 54C 264 54 231 73 213 104C 213 104 13 450 13 450C -4 481 -4 519 13 550C 13 550 213 896 213 896C 231 927 264 946 300 946C 300 946 700 946 700 946C 736 946 769 927 787 896C 787 896 987 550 987 550C 1004 519 1004 481 987 450C 987 450 787 104 787 104C 769 73 736 54 700 54C 700 54 300 54 300 54C 300 54 300 54 300 54M 300 103C 300 103 300 103 300 103C 300 103 700 103 700 103C 718 103 734 113 743 129C 743 129 943 475 943 475C 952 491 952 509 943 525C 943 525 743 871 743 871C 734 887 718 897 700 897C 700 897 300 897 300 897C 282 897 266 887 257 871C 257 871 57 525 57 525C 48 509 48 491 57 475C 57 475 257 129 257 129C 266 113 282 103 300 103C 300 103 300 103 300 103',hwl:'M 325 47C 271 47 222 75 195 122C 195 122 20 425 20 425C -7 471 -7 529 20 575C 20 575 195 878 195 878C 222 925 271 953 325 953C 325 953 675 953 675 953C 729 953 778 925 805 878C 805 878 980 575 980 575C 1007 529 1007 471 980 425C 980 425 805 122 805 122C 778 75 729 47 675 47C 675 47 325 47 325 47C 325 47 325 47 325 47M 325 125C 325 125 325 125 325 125C 325 125 675 125 675 125C 701 125 724 139 737 161C 737 161 912 464 912 464C 925 486 925 514 912 536C 912 536 737 839 737 839C 724 861 701 875 675 875C 675 875 325 875 325 875C 299 875 276 861 263 839C 263 839 88 536 88 536C 75 514 75 486 88 464C 88 464 263 161 263 161C 276 139 299 125 325 125C 325 125 325 125 325 125',htp:'M 275 60C 257 60 241 70 232 85C 232 85 7 475 7 475C -2 490 -2 510 7 525C 7 525 232 915 232 915C 241 930 257 940 275 940C 275 940 725 940 725 940C 743 940 759 930 768 915C 768 915 993 525 993 525C 1002 510 1002 490 993 475C 993 475 768 85 768 85C 759 70 743 60 725 60C 725 60 275 60 275 60C 275 60 275 60 275 60M 275 85C 275 85 275 85 275 85C 275 85 725 85 725 85C 734 85 742 90 747 98C 747 98 972 487 972 487C 976 495 976 505 972 513C 972 513 810 792 810 792C 810 792 203 185 203 185C 203 185 253 98 253 98C 258 90 266 85 275 85C 275 85 275 85 275 85M 190 208C 190 208 797 815 797 815C 797 815 747 902 747 902C 742 910 734 915 725 915C 725 915 275 915 275 915C 266 915 258 910 253 902C 253 902 28 513 28 513C 28 513 28 513 28 513C 24 505 24 495 28 487C 28 487 28 487 28 487C 28 487 190 208 190 208C 190 208 190 208 190 208',hnp:'M 300 54C 264 54 231 73 213 104C 213 104 13 450 13 450C -4 481 -4 519 13 550C 13 550 213 896 213 896C 231 927 264 946 300 946C 300 946 700 946 700 946C 736 946 769 927 787 896C 787 896 987 550 987 550C 1004 519 1004 481 987 450C 987 450 787 104 787 104C 769 73 736 54 700 54C 700 54 300 54 300 54C 300 54 300 54 300 54M 300 103C 300 103 300 103 300 103C 300 103 700 103 700 103C 718 103 734 113 743 129C 743 129 943 475 943 475C 952 491 952 509 943 525C 943 525 803 768 803 768C 803 768 223 187 223 187C 223 187 257 129 257 129C 266 113 282 103 300 103C 300 103 300 103 300 103M 197 232C 197 232 777 813 777 813C 777 813 743 871 743 871C 734 887 718 897 700 897C 700 897 300 897 300 897C 282 897 266 887 257 871C 257 871 57 525 57 525C 48 509 48 491 57 475C 57 475 197 232 197 232C 197 232 197 232 197 232',hwp:'M 325 47C 271 47 222 75 195 122C 195 122 20 425 20 425C -7 471 -7 529 20 575C 20 575 195 878 195 878C 222 925 271 953 325 953C 325 953 675 953 675 953C 729 953 778 925 805 878C 805 878 980 575 980 575C 1007 529 1007 471 980 425C 980 425 805 122 805 122C 778 75 729 47 675 47C 675 47 325 47 325 47C 325 47 325 47 325 47M 325 125C 325 125 325 125 325 125C 325 125 675 125 675 125C 701 125 724 139 737 161C 737 161 912 464 912 464C 925 486 925 514 912 536C 912 536 794 741 794 741C 794 741 245 192 245 192C 245 192 263 161 263 161C 276 139 299 125 325 125C 325 125 325 125 325 125M 206 259C 206 259 755 808 755 808C 755 808 737 839 737 839C 724 861 701 875 675 875C 675 875 325 875 325 875C 299 875 276 861 263 839C 263 839 88 536 88 536C 75 514 75 486 88 464C 88 464 206 259 206 259C 206 259 206 259 206 259',hts:'M 275 60C 257 60 241 70 232 85C 232 85 7 475 7 475C -2 490 -2 510 7 525C 7 525 232 915 232 915C 241 930 257 940 275 940C 275 940 725 940 725 940C 743 940 759 930 768 915C 768 915 993 525 993 525C 1002 510 1002 490 993 475C 993 475 768 85 768 85C 759 70 743 60 725 60C 725 60 275 60 275 60C 275 60 275 60 275 60',hns:'M 300 54C 264 54 231 73 213 104C 213 104 13 450 13 450C -4 481 -4 519 13 550C 13 550 213 896 213 896C 231 927 264 946 300 946C 300 946 700 946 700 946C 736 946 769 927 787 896C 787 896 987 550 987 550C 1004 519 1004 481 987 450C 987 450 787 104 787 104C 769 73 736 54 700 54C 700 54 300 54 300 54C 300 54 300 54 300 54',hws:'M 325 47C 271 47 222 75 195 122C 195 122 20 425 20 425C -7 471 -7 529 20 575C 20 575 195 878 195 878C 222 925 271 953 325 953C 325 953 675 953 675 953C 729 953 778 925 805 878C 805 878 980 575 980 575C 1007 529 1007 471 980 425C 980 425 805 122 805 122C 778 75 729 47 675 47C 675 47 325 47 325 47C 325 47 325 47 325 47',otl:'M 686 0C 686 0 313 0 313 0C 300 0 287 6 278 15C 278 15 14 279 14 279C 5 288 0 301 0 314C 0 314 0 687 0 687C 0 700 6 713 15 722C 15 722 279 986 279 986C 288 995 301 1000 314 1000C 314 1000 687 1000 687 1000C 700 1000 713 994 722 985C 722 985 986 721 986 721C 995 712 1000 699 1000 686C 1000 686 1000 313 1000 313C 1000 300 994 287 985 278C 985 278 721 14 721 14C 712 5 699 0 686 0C 686 0 686 0 686 0M 686 25C 692 25 699 28 703 32C 703 32 703 32 703 32C 703 32 967 295 967 295C 967 295 967 295 967 295C 972 300 975 306 975 313C 975 313 975 686 975 686C 975 692 972 699 968 703C 968 703 968 703 968 703C 968 703 705 967 705 967C 700 972 694 975 687 975C 687 975 314 975 314 975C 308 975 301 972 297 968C 297 968 33 705 33 705C 28 700 25 694 25 687C 25 687 25 314 25 314C 25 308 28 301 32 297C 32 297 295 33 295 33C 300 28 306 25 313 25C 313 25 686 25 686 25C 686 25 686 25 686 25',onl:'M 337 -1C 310 -1 285 9 266 28C 266 28 30 261 30 261C 12 280 1 305 1 332C 1 332 -1 663 -1 663C -1 690 9 715 28 734C 28 734 261 970 261 970C 280 988 305 999 332 999C 332 999 663 1001 663 1001C 690 1001 715 991 734 972C 734 972 970 739 970 739C 988 720 999 695 999 668C 999 668 1001 337 1001 337C 1001 310 991 285 972 266C 972 266 739 30 739 30C 720 12 695 1 668 1C 668 1 337 -1 337 -1M 337 51C 337 51 337 51 337 51C 337 51 668 53 668 53C 668 53 668 53 668 53C 681 53 693 58 702 67C 702 67 935 303 935 303C 935 303 935 303 935 303C 944 312 949 324 949 337C 949 337 947 668 947 668C 947 668 947 668 947 668C 947 681 942 693 933 702C 933 702 697 935 697 935C 688 944 676 949 663 949C 663 949 332 947 332 947C 319 947 307 942 298 933C 298 933 65 697 65 697C 56 688 51 676 51 663C 51 663 53 332 53 332C 53 319 58 307 67 298C 67 298 303 65 303 65C 312 56 324 51 337 51C 337 51 337 51 337 51',owl:'M 356 -1C 316 -2 278 14 250 43C 250 43 45 247 45 247C 17 275 1 314 1 354C 1 354 0 643 0 643C 0 683 16 722 44 750C 44 750 248 955 248 955C 276 983 315 999 355 999C 355 999 643 1000 643 1000C 683 1000 722 984 750 956C 750 956 955 752 955 752C 983 723 999 685 999 645C 999 645 1000 355 1000 355C 1000 315 984 277 956 249C 956 249 752 43 752 43C 724 15 685 -1 645 -1C 645 -1 356 -1 356 -1M 386 70C 386 70 616 70 616 70C 656 70 694 86 722 115C 722 115 885 278 885 278C 913 306 929 345 929 385C 929 385 928 615 928 615C 928 655 912 693 884 722C 884 722 721 884 721 884C 693 913 654 928 614 928C 614 928 384 928 384 928C 344 928 306 912 278 883C 278 883 115 720 115 720C 87 692 71 654 71 614C 71 614 72 383 72 383C 72 343 88 305 116 277C 116 277 279 114 279 114C 307 86 346 70 386 70C 386 70 386 70 386 70',otp:'M 686 0C 686 0 313 0 313 0C 300 0 287 6 278 15C 278 15 14 279 14 279C 5 288 0 301 0 314C 0 314 0 687 0 687C 0 700 6 713 15 722C 15 722 279 986 279 986C 288 995 301 1000 314 1000C 314 1000 687 1000 687 1000C 700 1000 713 994 722 985C 722 985 986 721 986 721C 995 712 1000 699 1000 686C 1000 686 1000 313 1000 313C 1000 300 994 287 985 278C 985 278 721 14 721 14C 712 5 699 0 686 0C 686 0 686 0 686 0M 686 25C 692 25 699 28 703 32C 703 32 703 32 703 32C 703 32 967 295 967 295C 967 295 967 295 967 295C 972 300 975 306 975 313C 975 313 975 686 975 686C 975 692 972 699 968 703C 968 703 968 703 968 703C 968 703 845 827 845 827C 845 827 173 155 173 155C 173 155 295 33 295 33C 300 28 306 25 313 25C 313 25 686 25 686 25C 686 25 686 25 686 25M 155 173C 155 173 827 845 827 845C 827 845 705 967 705 967C 700 972 694 975 687 975C 687 975 314 975 314 975C 308 975 301 972 297 968C 297 968 33 705 33 705C 28 700 25 694 25 687C 25 687 25 314 25 314C 25 308 28 301 32 297C 32 297 155 173 155 173C 155 173 155 173 155 173',onp:'M 337 -1C 310 -1 285 9 266 28C 266 28 30 261 30 261C 12 280 1 305 1 332C 1 332 -1 663 -1 663C -1 690 9 715 28 734C 28 734 261 970 261 970C 280 988 305 999 332 999C 332 999 663 1001 663 1001C 690 1001 715 991 734 972C 734 972 970 739 970 739C 988 720 999 695 999 668C 999 668 1001 337 1001 337C 1001 310 991 285 972 266C 972 266 739 30 739 30C 720 12 695 1 668 1C 668 1 337 -1 337 -1C 337 -1 337 -1 337 -1M 337 51C 337 51 337 51 337 51C 337 51 668 53 668 53C 668 53 668 53 668 53C 681 53 693 58 702 67C 702 67 935 303 935 303C 935 303 935 303 935 303C 944 312 949 324 949 337C 949 337 947 668 947 668C 947 668 947 668 947 668C 947 681 942 693 933 702C 933 702 835 799 835 799C 835 799 201 166 201 166C 201 166 303 65 303 65C 312 56 324 51 337 51C 337 51 337 51 337 51M 165 201C 165 201 799 834 799 834C 799 834 697 935 697 935C 688 944 676 949 663 949C 663 949 332 947 332 947C 319 947 307 942 298 933C 298 933 65 697 65 697C 56 688 51 676 51 663C 51 663 53 332 53 332C 53 319 58 307 67 298C 67 298 165 201 165 201C 165 201 165 201 165 201',owp:'M 356 -1C 316 -2 278 14 250 43C 250 43 45 247 45 247C 17 275 1 314 1 354C 1 354 0 643 0 643C 0 683 16 722 44 750C 44 750 248 955 248 955C 276 983 315 999 355 999C 355 999 643 1000 643 1000C 683 1000 722 984 750 956C 750 956 955 752 955 752C 983 723 999 685 999 645C 999 645 1000 355 1000 355C 1000 315 984 277 956 249C 956 249 752 43 752 43C 724 15 685 -1 645 -1C 645 -1 356 -1 356 -1C 356 -1 356 -1 356 -1M 386 70C 386 70 616 70 616 70C 656 70 694 86 722 115C 722 115 885 278 885 278C 913 306 929 345 929 385C 929 385 928 615 928 615C 928 655 912 693 884 722C 884 722 829 776 829 776C 829 776 223 170 223 170C 223 170 279 114 279 114C 307 86 346 70 386 70C 386 70 386 70 386 70M 170 223C 170 223 776 829 776 829C 776 829 721 884 721 884C 693 913 654 928 614 928C 614 928 384 928 384 928C 344 928 306 912 278 883C 278 883 115 720 115 720C 87 692 71 654 71 614C 71 614 72 383 72 383C 72 343 88 305 116 277C 116 277 170 223 170 223C 170 223 170 223 170 223',ots:'M 686 0C 686 0 313 0 313 0C 300 0 287 6 278 15C 278 15 14 279 14 279C 5 288 0 301 0 314C 0 314 0 687 0 687C 0 700 6 713 15 722C 15 722 279 986 279 986C 288 995 301 1000 314 1000C 314 1000 687 1000 687 1000C 700 1000 713 994 722 985C 722 985 986 721 986 721C 995 712 1000 699 1000 686C 1000 686 1000 313 1000 313C 1000 300 994 287 985 278C 985 278 721 14 721 14C 712 5 699 0 686 0C 686 0 686 0 686 0',ons:'M 337 -1C 310 -1 285 9 266 28C 266 28 30 261 30 261C 12 280 1 305 1 332C 1 332 -1 663 -1 663C -1 690 9 715 28 734C 28 734 261 970 261 970C 280 988 305 999 332 999C 332 999 663 1001 663 1001C 690 1001 715 991 734 972C 734 972 970 739 970 739C 988 720 999 695 999 668C 999 668 1001 337 1001 337C 1001 310 991 285 972 266C 972 266 739 30 739 30C 720 12 695 1 668 1C 668 1 337 -1 337 -1',ows:'M 356 -1C 316 -2 278 14 250 43C 250 43 45 247 45 247C 17 275 1 314 1 354C 1 354 0 643 0 643C 0 683 16 722 44 750C 44 750 248 955 248 955C 276 983 315 999 355 999C 355 999 643 1000 643 1000C 683 1000 722 984 750 956C 750 956 955 752 955 752C 983 723 999 685 999 645C 999 645 1000 355 1000 355C 1000 315 984 277 956 249C 956 249 752 43 752 43C 724 15 685 -1 645 -1C 645 -1 356 -1 356 -1'};document.onreadystatechange=fnStartInit;function fnStartInit(){if(document.readyState==='complete'){var style=document.createElement('style');style.innerHTML='.fi-padding {padding-bottom: 0em;} @-webkit-keyframes fi-spin {from {-webkit-transform: rotate(0);-o-transform: rotate(0);transform: rotate(0);}to {-webkit-transform: rotate(360deg);-o-transform: rotate(360deg);transform: rotate(360deg);}}@keyframes fi-spin {from {-ms-transform: rotate(0);-moz-transform: rotate(0);-webkit-transform: rotate(0);-o-transform: rotate(0);transform: rotate(0);}to {-ms-transform: rotate(360deg);-moz-transform: rotate(360deg);-webkit-transform: rotate(360deg);-o-transform: rotate(360deg);transform: rotate(360deg);}}.fi-spin {-webkit-animation: fi-spin 2s linear infinite;-moz-animation: fi-spin 2s linear infinite;-ms-animation: fi-spin 2s linear infinite;-o-animation: fi-spin 2s linear infinite;animation: fi-spin 2s linear infinite;}.fi-spin-ccw {-webkit-animation: fi-spin 2s linear infinite;-moz-animation: fi-spin 2s linear infinite;-ms-animation: fi-spin 2s linear infinite;-o-animation: fi-spin 2s linear infinite;animation: fi-spin 2s linear infinite;animation-direction: reverse;}.fi-pulse {-webkit-animation: fi-spin 2s infinite steps(8);-moz-animation: fi-spin 2s infinite steps(8);-ms-animation: fi-spin 2s infinite steps(8);-o-animation: fi-spin 2s infinite steps(8);animation: fi-spin 2s infinite steps(8);}.fi-pulse-ccw {-webkit-animation: fi-spin 2s infinite steps(8);-moz-animation: fi-spin 2s infinite steps(8);-ms-animation: fi-spin 2s infinite steps(8);-o-animation: fi-spin 2s infinite steps(8);animation: fi-spin 2s infinite steps(8);animation-direction: reverse;}';var ref=document.querySelector('script');ref.parentNode.insertBefore(style,ref);friconix_update();}}
String.prototype.replaceAt=function(index,newChar){return this.substr(0,index)+newChar+this.substr(index+newChar.length);}
function friconix_update(){let icons=document.querySelectorAll('i[class^="fi"], i[class*=" fi"]');for(var i=0;i<icons.length;i++){icon=icons[i];var mask='';path='';fiClassList=icon.classList;for(var j=0;j<fiClassList.length;j++){fiClass=fiClassList[j];if(fiClass.substr(0,3)==='fi-'){var pathName=fiClass.substr(10);if(pathName in paths){path=paths[pathName];mask=fiClass.substr(3,6);}}}
for(var j=0;j<fiClassList.length;j++){fiClass=fiClassList[j];if(fiClass=='fi-triangle')mask=mask.replaceAt(0,'t');if(fiClass=='fi-equilateral')mask=mask.replaceAt(0,'e');if(fiClass=='fi-circle')mask=mask.replaceAt(0,'c');if(fiClass=='fi-square')mask=mask.replaceAt(0,'s');if(fiClass=='fi-hexagon')mask=mask.replaceAt(0,'h');if(fiClass=='fi-octagon')mask=mask.replaceAt(0,'o');if(fiClass=='fi-no-shape')mask=mask.replaceAt(0,'x');if(fiClass=='fi-thin')mask=mask.replaceAt(1,'t');if(fiClass=='fi-normal')mask=mask.replaceAt(1,'n');if(fiClass=='fi-wide')mask=mask.replaceAt(1,'x');if(fiClass=='fi-no-thickness')mask=mask.replaceAt(1,'x');if(fiClass=='fi-line')mask=mask.replaceAt(2,'l');if(fiClass=='fi-solid')mask=mask.replaceAt(2,'s');if(fiClass=='fi-prohibited')mask=mask.replaceAt(2,'p');if(fiClass=='fi-no-style')mask=mask.replaceAt(2,'x');if(fiClass=='fi-up')mask=mask.replaceAt(3,'u');if(fiClass=='fi-right')mask=mask.replaceAt(3,'r');if(fiClass=='fi-down')mask=mask.replaceAt(3,'d');if(fiClass=='fi-left')mask=mask.replaceAt(3,'l');if(fiClass=='fi-no-direction')mask=mask.replaceAt(3,'u');if(fiClass=='fi-flip-h')mask=mask.replaceAt(4,'v');if(fiClass=='fi-flip-v')mask=mask.replaceAt(4,'v');if(fiClass=='fi-spin')mask=mask.replaceAt(4,'s');if(fiClass=='fi-pulse')mask=mask.replaceAt(4,'p');if(fiClass=='fi-size-xs')mask=mask.replaceAt(5,'t');if(fiClass=='fi-size-tiny')mask=mask.replaceAt(5,'t');if(fiClass=='fi-size-s')mask=mask.replaceAt(5,'s');if(fiClass=='fi-size-m')mask=mask.replaceAt(5,'m');if(fiClass=='fi-size-l')mask=mask.replaceAt(5,'l');if(fiClass=='fi-size-xl')mask=mask.replaceAt(5,'x');if(fiClass=='fi-size-xxl')mask=mask.replaceAt(5,'h');if(fiClass=='fi-size-huge')mask=mask.replaceAt(5,'h');if(fiClass=='fi-2x')mask=mask.replaceAt(5,'2');if(fiClass=='fi-3x')mask=mask.replaceAt(5,'3');if(fiClass=='fi-4x')mask=mask.replaceAt(5,'4');if(fiClass=='fi-5x')mask=mask.replaceAt(5,'5');if(fiClass=='fi-6x')mask=mask.replaceAt(5,'6');if(fiClass=='fi-7x')mask=mask.replaceAt(5,'7');if(fiClass=='fi-8x')mask=mask.replaceAt(5,'8');if(fiClass=='fi-9x')mask=mask.replaceAt(5,'9');}
if(path&&mask){icon.innerHTML=friconix_createSVG(path,mask);}}}
function friconix_createSVG(path,mask,classes){classes='';var label=mask.substring(0,3);if('tecshox'.indexOf(label.charAt(0))==-1)label=label.replaceAt(0,'x');if('tnwx'.indexOf(label.charAt(1))==-1)label=label.replaceAt(1,'x');if('lspx'.indexOf(label.charAt(2))==-1)label=label.replaceAt(1,'x');if(label.charAt(0)!='x'&&label.charAt(1)=='x')label=label.replaceAt(1,'t');if(label.charAt(0)!='x'&&label.charAt(2)=='x')label=label.replaceAt(2,'s');var transform='';switch(mask.charAt(4)){case'h':transform+='translate(1000,0) scale(-1,1) ';classes+='fi-padding';break;case'v':transform+='translate(0,1000) scale(1,-1) ';classes+='fi-padding';break;case's':if(mask.charAt(3)=='l')classes+='fi-spin-ccw ';else classes+='fi-spin ';break;case'p':if(mask.charAt(3)=='l')classes+='fi-pulse-ccw ';else classes+='fi-pulse ';break;default:classes+='fi-padding';}
switch(mask.charAt(3)){case'r':transform+='rotate(90, 500, 500) ';break;case'd':transform+='rotate(180, 500, 500) ';break;case'l':transform+='rotate(270, 500, 500) ';break;}
switch(mask.charAt(5)){case't':width='0.3em';break;case's':width='0.5em';break;case'n':width='1em';break;case'l':width='1.33em';break;case'x':width='1.66em';break;case'h':width='10cm';break;case'1':case'2':case'3':case'4':case'5':case'5':case'6':case'7':case'8':case'9':width=mask.charAt(5)+'em';break;default:width='1em';}
var svgContent='';svgContent+='<svg class="'+classes+'" role="img" xmlns="http://www.w3.org/2000/svg" width="1000mm" height="1000mm" viewBox="0 0 1000 1000" style="width:'+width+'; height:'+width+';vertical-align: middle;">';svgContent+='<path id="path" fill="currentColor" d="'+shapes[label]+' '+path+'"transform="'+transform+'"></path>';svgContent+='</svg>';return svgContent;}
