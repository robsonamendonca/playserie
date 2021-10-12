
var temporada_listLastIndex = new Array();
temporada_listLastIndex[0] = 12;  //temporada 1 tem 13 episodios
temporada_listLastIndex[1] = 34;  //temporada 2 tem 22 episodios
temporada_listLastIndex[2] = 47;  //temporada 3 tem 13 episodios

var link_list = new Array();
link_list[0] = "https://rr3---sn-5hne6n7z.googlevideo.com/videoplayback?expire=1634081430&ei=FqplYeGBMYqj8wStpIToCw&ip=2a02:4780:8:a::5&id=04541639e3f5c8b6&itag=18&source=blogger&mh=1o&mm=31&mn=sn-5hne6n7z&ms=au&mv=m&mvi=3&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2802.973&lmt=1423775605801162&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIhAJM9cI-2TtW8Tf6-mo_H7U9UGPgCFBLJi-D4jFftDPAyAiBALOlNe-NeF82xSBpnWXvovTYtmur54b7pGc4rqBK88A&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAOh3ck0s5xCoD4TWfOSDq5Oi8tedXQXa3yEVMfqisImvAiBVzG6lvvS0UHkhZCicATXu8y-BpJUKe729bKh3E3VYOQ";
link_list[1] = "https://rr4---sn-5hne6ns6.googlevideo.com/videoplayback?expire=1634081432&ei=GKplYaXdK4HZ8wSvsLGICg&ip=2a02:4780:8:a::5&id=323c63be460fb49c&itag=18&source=blogger&mh=rc&mm=31&mn=sn-5hne6ns6&ms=au&mv=m&mvi=4&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2638.808&lmt=1423775783821936&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIgBSIxoKjS04AmzICXISH-EPicxrv_HFP316IV8Qy0syMCIQDxs6pmN5Bnf9NzB5Desq8T47faPWrLfDoeVJhQd6jXBA&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAO7u5tIffC7NnwR5PQhsnAYtjmrAvUZDT8cZFam5-j-eAiAgGdL5mZo_H21iYrA0LtKz0cbpfp8VCZsnVveT64lwcg";
link_list[2] = "https://rr5---sn-5hne6n7s.googlevideo.com/videoplayback?expire=1634081434&ei=GqplYYXlJc67gwPZr43ABg&ip=2a02:4780:8:a::5&id=aa34998c33ea189b&itag=18&source=blogger&mh=Ng&mm=31&mn=sn-5hne6n7s&ms=au&mv=m&mvi=5&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2642.802&lmt=1423775856464859&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIgYrKng2AGen_J4rMUzFtzDKd_0pU_Zh8eL3UVZmyu2QQCIQCgrNHPVeefzqS4Qo5idVDSHcpgnEDqtL1JQH4giIIDJQ&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgQxg5eSmelGhFxsVjkDPMFWDwowiOQ9lsXcMXDaQ6KqECIEAJkqmADfByQ9eqLinP3mSSE881VHDIrN2hLDvFjqEb";
link_list[3] = "https://rr6---sn-5hne6n7l.googlevideo.com/videoplayback?expire=1634081436&ei=HKplYfy-Ecv0hwbYmJuYDQ&ip=2a02:4780:8:a::5&id=e6634580aed277d7&itag=18&source=blogger&mh=ua&mm=31&mn=sn-5hne6n7l&ms=au&mv=m&mvi=6&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2575.719&lmt=1423776453068731&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIgCjxgYQSEnc-uqzsw45J0hT8ppBIULs-usY_ShwOHYHACIQCi_V4H4RFO3KFDO5SV7oJECX2jHM1-cxZGc5VpoIIFKw&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAI0aeu3sHbGAseEcFwcGbJiz-Dx3_u4t_sUknjvx3qM6AiEAvh9BTo7V3Cc1zIRE80F8ScJui88l6aZYXYiU6IqVvUU";
link_list[4] = "https://rr2---sn-5hne6nsy.googlevideo.com/videoplayback?expire=1634081438&ei=HqplYY7nF5O98wTyt6jQBQ&ip=2a02:4780:8:a::5&id=1778717ef50711bf&itag=18&source=blogger&mh=4-&mm=31&mn=sn-5hne6nsy&ms=au&mv=m&mvi=2&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2639.806&lmt=1423775855303759&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRgIhALORhPTFqOw-SDYZK_Ua8WGZxK33lb9fGSw7JhtT83jxAiEA-0L-ISWyMyjhPStlIhl9L0c6NxvuQ_eO7EnMX4gGa1c&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIfM3NfGKtOELTjDfOfRwiLbzv9teo5KkBUGpO35iy8GwIhAJtn2seU1wNtJqMyV61cNqEHnG5ZXSLXxQqs4ohjWI_G";
link_list[5] = "https://rr2---sn-5hne6nsy.googlevideo.com/videoplayback?expire=1634081440&ei=IKplYaqjFbmC2LYPrs-88Aw&ip=2a02:4780:8:a::5&id=bf5b3c6dcd3ed29b&itag=18&source=blogger&mh=1I&mm=31&mn=sn-5hne6nsy&ms=au&mv=m&mvi=2&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2631.796&lmt=1423775832354205&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRgIhAM5pzyqBucMuiWZ68lRrLbkN-eqParKQxZdfocP4xQldAiEAuSwHkyVXiRJWEMQtnTihOhh1GUFe1teYqZB2D9dfPwA&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgHeHuyeT-dQxmFJa5lYiNtbv3LjAkcw8epIzNgexdOFoCIDG40uGznF9JasSF-aFTyUocnwQWf7eprU8RntXC84rz";
link_list[6] = "https://rr3---sn-5hne6nzs.googlevideo.com/videoplayback?expire=1634081442&ei=IqplYZSCD8P18gSBh7W4CQ&ip=2a02:4780:8:a::5&id=acce9de661db1d40&itag=18&source=blogger&mh=H6&mm=31&mn=sn-5hne6nzs&ms=au&mv=m&mvi=3&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2635.789&lmt=1423775801612810&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIgKixvxhxDifUm16B2PSvzerTkfLVq6_rskfPZ4v1hDiwCIQCPX9OkcgmuOl162fKiFwqZlGdy6Q7quODkEz5ivAMvtw&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgTlPp5uMhiLLgtatuJ8Bo-w-_NfEgf_gLyglpOZGp9CUCIBVM9fmeOxgw1kBGxnnE84khNcZU_7-O5sPPmdxoczl2";
link_list[7] = "https://rr5---sn-5hne6nzs.googlevideo.com/videoplayback?expire=1634081444&ei=JKplYeA4l8qGBoSwkOAB&ip=2a02:4780:8:a::5&id=bed0390705b79e07&itag=18&source=blogger&mh=Wa&mm=31&mn=sn-5hne6nzs&ms=au&mv=m&mvi=5&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2638.762&lmt=1423775774272404&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRgIhAIAc7EnCLpVq3kz4uKTsIifJl1WpAYfYU7ThWwcfuOlQAiEAnV3wbKKDml6_8L0fNtKztCfIjNmIoYlHK3m5pZySFuc&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAN1HTJrSyO_-n5vTJgs1OjF4489q1lB0Yxo-24VsQRzeAiEA2ww3LME7ZI_6ryNMiC5m1MIbcepQ2J40Matn26VQE1M";
link_list[8] = "https://rr3---sn-5hne6nsy.googlevideo.com/videoplayback?expire=1634081445&ei=JaplYdL9MZ-hj-8Pl467sA4&ip=2a02:4780:8:a::5&id=c5cdb0a9de05e279&itag=18&source=blogger&mh=kb&mm=31&mn=sn-5hne6nsy&ms=au&mv=m&mvi=3&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2585.704&lmt=1423775896100550&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIgGGwDgbFf8oKNF2N9HKqF5HvpeKP-CilZ2JQNZhPJg3ECIQD5CWXxbK9HYXmf2SSEhV3Dx8x--aiOB-XndSVa2I0FhQ&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAKsVcFR7qlvekn9e0A6GhtvXfC1I-fMKxqzvXhq4zupKAiBsX6GKDspr00GoD7H-G4XViDywDMkSdlM3ER7kkF82yw";
link_list[9] = "https://rr1---sn-5hne6n7e.googlevideo.com/videoplayback?expire=1634081447&ei=J6plYbnPF-eh0_wPk5K-wAY&ip=2a02:4780:8:a::5&id=55d97a01c77b3fbd&itag=18&source=blogger&mh=Cm&mm=31&mn=sn-5hne6n7e&ms=au&mv=m&mvi=1&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2642.755&lmt=1423775808899134&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRgIhANqd1IYMGI4AV-HK9lIEy7gMN6Sq3tFSSz5NUI-wtUDUAiEAmbDj5wYGoAiPLmVdj-kQ37bpa2xCqpUWQRhQazzWM8g&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgK_NfELQiYM34QbKt5Ddq_RlPoFx9b5I50pU2cKGLFjgCIQD7jbjEFwAoQMnnB8aSCf4ZFepPc0LLe0necCvEYAdsNw";
link_list[10] = "https://rr1---sn-5hne6nzs.googlevideo.com/videoplayback?expire=1634081449&ei=KaplYb2GDdTzzLUPv82SgAU&ip=2a02:4780:8:a::5&id=4e77e894f1325f3b&itag=18&source=blogger&mh=jq&mm=31&mn=sn-5hne6nzs&ms=au&mv=m&mvi=1&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2637.810&lmt=1423775779641135&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRAIgFlGPseCfdMybptYRm4n6e-s3xX0ZweD19ibozZdHWNoCIGWja87JcT7Q3Gjv2wuiebJG4_jCLjdmqRBFtklKWe0x&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAJ5E0SUaOtVdrkSXmD-EM5DP24aatNvK-4k4wdc5G3ZJAiEA_IXseZjMMDihp7xbJ8UysuRhKCObhWy_I6qxoZyRz70";
link_list[11] = "https://rr1---sn-5hne6nsd.googlevideo.com/videoplayback?expire=1634081451&ei=K6plYcueDMmp0_wPi-e-4Ak&ip=2a02:4780:8:a::5&id=2d64969fed1d1426&itag=18&source=blogger&mh=Aj&mm=31&mn=sn-5hne6nsd&ms=au&mv=m&mvi=1&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2644.799&lmt=1423775894224332&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIhAKhszQeONN4R-zaAF3cwOxFzFsEp1IRZSoFw24SKRg6PAiAJaJuMapcUcWlYpjTr8GJYxUwOfRmBc7_bp6SL5J7B9g&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgakRRjfitm4sIPVkGpmUFyhIGuc0KCONwPVSN4_6aUTICIQD1BqeyvQSCvceFHqOHVdM0mCnej9BwH8BaOV3A-h1QSQ";
link_list[12] = "https://rr4---sn-5hne6n7e.googlevideo.com/videoplayback?expire=1634081453&ei=LaplYeifBqj3zLUPg76l2Ao&ip=2a02:4780:8:a::5&id=4338962d91d842f1&itag=18&source=blogger&mh=XK&mm=31&mn=sn-5hne6n7e&ms=au&mv=m&mvi=4&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2640.828&lmt=1423776080761530&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRAIgZSuZ9WGAs7_Hg5R331zW5AuqOve7E177d6rt_NmMXzcCIEEN90ymrKBkygr-fQ4ekGWCUl52EP_5vz6YCShDvgHK&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgT7auP-4wPSG8PcMhLObrWmVFQRCpUoRxiuYGaCaU_U8CIDiDyTpr9ljLBrJXsaHqB0w1zc3yWcBUSFRmWZ9rsgU9";
link_list[13] = "https://rr5---sn-5hne6nsr.googlevideo.com/videoplayback?expire=1634081454&ei=LqplYY_gNYX1zLUP5rqD8Ao&ip=2a02:4780:8:a::5&id=9dec1d203e1003f2&itag=18&source=blogger&mh=Om&mm=31&mn=sn-5hne6nsr&ms=au&mv=m&mvi=5&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2645.077&lmt=1423933148388459&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIgN4F6PKMitVrDuKCQn9Gujuizv9imxh9e6LsAIkkZetkCIQDcltJ7iMKAlETVaFWJxBywv8I5ZApXUOpN7BAKrpPTXg&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgJC43SJNJx31TvuxwdC37CIq85chS6M3BQmDVcZ9oqkACIQDR893io7KE4vQePoO0aQEiM6T9BD2LXe4C32eXNCUXpw";
link_list[14] = "https://rr5---sn-5hne6nsd.googlevideo.com/videoplayback?expire=1634081456&ei=MKplYa78MeCn0_wPja2NkA8&ip=2a02:4780:8:a::5&id=63e2acfda49487e5&itag=18&source=blogger&mh=L1&mm=31&mn=sn-5hne6nsd&ms=au&mv=m&mvi=5&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2639.760&lmt=1423933427212436&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIhAICQ_zaeh7MH9OvvhTqvLvKiNm5SAH9W8OSPQzS5sMLYAiBlxU-7ofIGF819Nj26-2kOr8ZBv3MdGptxpDY_C1oT9w&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgVMTcaH3UQQ1bHtkwaiyym-4NkB9aFqsDg1tfUp2vbM4CIF1Y3FfvSjPklxJuOo0O9fW9snJfN4mOBbiDLGEbDk2c";
link_list[15] = "https://rr5---sn-5hne6nzs.googlevideo.com/videoplayback?expire=1634081458&ei=MqplYfXHLKmr0_wPkKiDQA&ip=2a02:4780:8:a::5&id=fb3ea0b6178df704&itag=18&source=blogger&mh=_v&mm=31&mn=sn-5hne6nzs&ms=au&mv=m&mvi=5&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2645.519&lmt=1423933254632856&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRAIgXkEYEsB_KhVz7XRsKLCRGivGyBgp-FIxpBvbPAGev04CIHKUQVRVIdzX7mHIww8DzAlSHVTAFgSwbfVRglQb9cQz&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgcDPhLl673cmCljKZj0arFbkujPuCi3TqStgrR-KKjgwCIQD1mAwjOT1cToOYoQ930HfhWZZuZHkWs_ay3EfC4J7qig";
link_list[16] = "https://rr1---sn-5hne6ns6.googlevideo.com/videoplayback?expire=1634081460&ei=NKplYcTgJeGFsALSqql4&ip=2a02:4780:8:a::5&id=de5be36fda31f9cc&itag=18&source=blogger&mh=kN&mm=31&mn=sn-5hne6ns6&ms=au&mv=m&mvi=1&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2654.690&lmt=1423934284230359&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIhAMbizvkoOYNl4Ja-555E6Xu9kvEU_87nMD9_guSVE8ZQAiA6kSMtSwN-9kzhyUkmHYoaIFFb9AHMYw-u494fX0-NpA&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAJxQ2eMNuneJVXin2CZq3e-PWc0f7rhGwWfQrsTskSo7AiAB4qbJi3Ca90H4GAfnVmrpZcwuM1fVA_ykZGRcbzoZKQ";
link_list[17] = "https://rr2---sn-5hne6nzs.googlevideo.com/videoplayback?expire=1634081462&ei=NqplYfDMHO_1zLUP5IqVsAc&ip=2a02:4780:8:a::5&id=a0871d2a19981996&itag=18&source=blogger&mh=h6&mm=31&mn=sn-5hne6nzs&ms=au&mv=m&mvi=2&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2642.546&lmt=1423933368177050&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIhAMmX-txQtR3HqbtONII0HbocXrD4ziI6Qh2s87e881UBAiB1NWPqwuGeRH4kioatFHe3xkgqbxiGqcrHXMDXuOyxwg&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgJWham4Pn6y4s5Ax6H8a2IGXyqanXfWYHqzLwL6K1dvsCIQDvKgjw7aGMH7KdYSW3AMMm4AgA1ES4cTx5UXx7Pau0ew";
link_list[18] = "https://rr3---sn-5hne6nsk.googlevideo.com/videoplayback?expire=1634081464&ei=OKplYYuJFb630_wPzumzIA&ip=2a02:4780:8:a::5&id=79e8ac240a759423&itag=18&source=blogger&mh=vz&mm=31&mn=sn-5hne6nsk&ms=au&mv=m&mvi=3&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2644.009&lmt=1423933516920488&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRgIhAJJekGAKkAXnw7CBFw1_PHcLp4Mzqc3zwbaJmenDTekeAiEA7Veaal2wGjX3Dna2Lch95e8eMovyxnqG7ZsoJ0zqekw&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAIvhmGuCIqHVRGUZPx-xbOuuH2WIvPhN3MLBWR4xltvTAiEAmBDLVpVGS4DXNOsPtvYm1nUvVChwIyUoBUS1zmCkJ14";
link_list[19] = "https://rr6---sn-5hne6n7e.googlevideo.com/videoplayback?expire=1634081466&ei=OqplYZmUD5Kh0_wP3fCfiA8&ip=2a02:4780:8:a::5&id=c6d4357df7fb8bf6&itag=18&source=blogger&mh=A8&mm=31&mn=sn-5hne6n7e&ms=au&mv=m&mvi=6&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2644.868&lmt=1423933517125192&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIhAMtZ_SMSrLw9oFj-q_d2_SzClYULJmY_okPSzNBmlQN3AiBkXs4i5ZoDn5x6u5VhTGEHo9ed9v9KLqSu395v9L577w&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgN_0W399D1ll7gvCDE9rPqu8TIQFNoXljF9sd3AFXnZQCIGbzkMmVxTTBmDOy0gdbeTNCI6ZxHWYA0Yi6Ypqm2S4X";
link_list[20] = "https://rr4---sn-5hne6n7z.googlevideo.com/videoplayback?expire=1634081468&ei=PKplYYCSB8Sz0_wPjL-6yA0&ip=2a02:4780:8:a::5&id=941354b7f26b34be&itag=18&source=blogger&mh=Vf&mm=31&mn=sn-5hne6n7z&ms=au&mv=m&mvi=4&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2620.789&lmt=1423933342942447&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRAIgCSAMl84gGggNYrgu8k-SpI1P8xSmw--D5joXkgUPXzMCIG0ACF-wXWahfSr-6STk-Hl9WWRWMvff992J46nj5dkh&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhANr_Yhqyz4piju0bbZLJP9s2s2Mw_QDdM2LznYNBMoaAAiEAsoyQMs3Za-K4xmHnoosJr8KObDt4yM_NP3ZS6sU4QKg";
link_list[21] = "https://rr3---sn-5hne6nsk.googlevideo.com/videoplayback?expire=1634081470&ei=PqplYZTVC7Gn0_wPvMGPuAc&ip=2a02:4780:8:a::5&id=aaa1ccc72529b5eb&itag=18&source=blogger&mh=ZA&mm=31&mn=sn-5hne6nsk&ms=au&mv=m&mvi=3&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2620.395&lmt=1423933420485189&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIhAJH1isUvOzERhz9gxkM6C2VLoNw7L1ZdiMhdxdft_fA6AiBEsHbfP5_bkIwgsJc3qfHy48UYBWMf3ARl0ZEWNUxiDQ&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAO5CMrbxjXdCI-OrppoCQ4evjw2QAteOQFlnNiVjIe9FAiBs-Z4ApQvljS7TSSfyRGeuXMFJC93rtiEOALe1C4v1JA";
link_list[22] = "https://rr3---sn-5hne6nsr.googlevideo.com/videoplayback?expire=1634081471&ei=P6plYcjWNbSE0_wPnLSqqAQ&ip=2a02:4780:8:a::5&id=7b9c7aa3b8e5358e&itag=18&source=blogger&mh=jL&mm=31&mn=sn-5hne6nsr&ms=au&mv=m&mvi=3&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2583.962&lmt=1423933438780511&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRAIgD1i5wn_TKHHFZKIjgE21NM5uosWMojAN8hs5A_FnYAACIHIDaOMPZf3BlHda4Loi5atLAD3RMiqoG3maQIbMJNQe&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgDZ_SAs_2vCbnnj9WBzFGXa21U0Nxu18KM7-rCi-aTTICIQDVsYRHn2AVV0IqBURuU-JNdclaaBALrkoIjyfUyWaHuw";
link_list[23] = "https://rr2---sn-5hne6nsz.googlevideo.com/videoplayback?expire=1634081473&ei=QaplYeDJMtu10_wPyOGm2AY&ip=2a02:4780:8:a::5&id=74e939a11a1cc7c3&itag=18&source=blogger&mh=QW&mm=31&mn=sn-5hne6nsz&ms=au&mv=m&mvi=2&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2645.542&lmt=1423933493804608&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIhAMxYbD6WYYsSPewnuS9d8o93-YwqkYVkIQwYkVKZN-5TAiB7cF4i_EIJsyNUqGXmueb3XmCKyj8EMGjHjG99r7XdXA&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAODdOAuVI-wPnxA84DnWra0wrCQ57-VyY718kBISAoNBAiEA7Q8IwW5lM7qGpKZ6w8NRz-oev7HICMZKlnXv7otQFXw";
link_list[24] = "https://rr4---sn-5hneknee.googlevideo.com/videoplayback?expire=1634081475&ei=Q6plYbaZJZyF0_wP1c2TuAs&ip=2a02:4780:8:a::5&id=a2a0ea6533404d40&itag=18&source=blogger&mh=W2&mm=31&mn=sn-5hneknee&ms=au&mv=m&mvi=4&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2640.294&lmt=1423933412185168&mt=1634052561&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRAIgS54RPo4ld6zd18KS4wBF1TTEwChIZmgz_J9GFSYW5goCIH4wR0NqHKuTLwStv3HuUy02c3YGdJbyFICWh3ZUuMxN&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgNU9-PWMu1aKtNTk8--R6pme6Qq1zj2RzsWWP3EJ9sZ4CIH8VpRAqvQhlECidigR4Jt_89jiK_cdLRQicg4FAg_mW";
link_list[25] = "https://rr1---sn-5hne6nzs.googlevideo.com/videoplayback?expire=1634081477&ei=RaplYY-YHOWm0_wP4tqKuAs&ip=2a02:4780:8:a::5&id=9f589283e3299561&itag=18&source=blogger&mh=Rs&mm=31&mn=sn-5hne6nzs&ms=au&mv=m&mvi=1&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2619.094&lmt=1423933557753878&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRgIhAMsbZ5fiM-H5qRKpdU9cqL_rLQ1M1z-8hmEvDx-1U_PNAiEApFKo09RRYeWwea-94A3Qo9slSkzdsa2KTgNa8tqWuUc&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgJcJsy7nywWAoNhDCRNfWAq2FDuD0ge-FsFc2LufDLQYCIBldJFPgQaGL0rNrNurzFp3p5Qh5MqPp-hVVV5mju_9O";
link_list[26] = "https://rr5---sn-5hne6nsr.googlevideo.com/videoplayback?expire=1634081479&ei=R6plYbPoF8im0_wPiZeZkAE&ip=2a02:4780:8:a::5&id=e761803e348f2ebf&itag=18&source=blogger&mh=Et&mm=31&mn=sn-5hne6nsr&ms=au&mv=m&mvi=5&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2614.241&lmt=1423933522909534&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIgJ0pH532DOvtCPOcRK-KqP13aUC2hfM47eG-ankXyvFoCIQDyOl4_MsF2lyuShcRgDhTpwCL92i2Q8ZPbeCou0_tuwg&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgC9ZGemm3_I-pmuhbi3GyAxtDzDn2JYVXFZAB__pEsnwCIHYMuLikumxMvifJhlm8kUAnuxLvD1GPbNNLlWb6Rm47";
link_list[27] = "https://rr1---sn-5hne6nsk.googlevideo.com/videoplayback?expire=1634081481&ei=SaplYaKKEpzyzLUP4vCI2A8&ip=2a02:4780:8:a::5&id=f96f047f96887277&itag=18&source=blogger&mh=g4&mm=31&mn=sn-5hne6nsk&ms=au&mv=m&mvi=1&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2638.065&lmt=1423933461469393&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRgIhAKzveL4ewectOuG3phqbZ0aJMKOqjRm-_xEDiz42pSheAiEAgk5em5QsFMEXrVB6znIOD3yTEk7v891W8gQ_CBtcs1c&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAP-xSWonROqVy9TDZIuCWFIdHOIwg6aFQORS1VW3e-z6AiAM4S3PClaLVEHyuk6BKSniHO7PgtzuMzbAV7Iim_VsHA";
link_list[28] = "https://rr2---sn-5hne6nzs.googlevideo.com/videoplayback?expire=1634081483&ei=S6plYcjLC9ah0_wPhOWxiAU&ip=2a02:4780:8:a::5&id=3af0e52e6003dea7&itag=18&source=blogger&mh=xu&mm=31&mn=sn-5hne6nzs&ms=au&mv=m&mvi=2&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2644.985&lmt=1423933532977772&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRAIgfLhr9vbJVW0hoBD0UMtUWNvzy6wqEE8c0boO7Z72WcwCIDcEZNVlTllFO3dkarjx2yYO3EzbaTuUrmnfVhPwQ5wM&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgSQWdPnavzz3b67Xen7qV9-nhlX572BHp0zxbwBrOCn0CIErFLF2jsqmQ7q8lGUtQ_FM406hPNrEZTiDSjN-bLiP3";
link_list[29] = "https://rr5---sn-5hne6n7z.googlevideo.com/videoplayback?expire=1634081485&ei=TaplYa2jBL-00_wPx6mo2AI&ip=2a02:4780:8:a::5&id=31a6a8e0160c5e4d&itag=18&source=blogger&mh=mY&mm=31&mn=sn-5hne6n7z&ms=au&mv=m&mvi=5&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2580.410&lmt=1423933485323723&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIhAJlpmfG1f_bkwk0qwb8Nm--NdLbKJBISixm1nK2m-UYOAiAxdFl8Orrhr02KfNeCqFfPYxqHSahMgzynol2vcllRQw&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgVOb812HSidfV35XrzUdzPVTdtVqrVnPP-lu-Mo4XKpQCIQDkfryOuRghsmPd8o2KXyhWzsGab2HaNeIS7z0qyMSkTQ";
link_list[30] = "https://rr5---sn-5hne6nzs.googlevideo.com/videoplayback?expire=1634081486&ei=TqplYdK_ONz2zLUPk8aUkA0&ip=2a02:4780:8:a::5&id=cebe72358b91f2ed&itag=18&source=blogger&mh=kT&mm=31&mn=sn-5hne6nzs&ms=au&mv=m&mvi=5&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2645.077&lmt=1423933514419386&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIgZtByJQ-boGNvTfV6B7Y6_J6UyXRoMzreuzrNBeot7lECIQC1ZKgbS-Yjxo1peX1PF6vStFX9JIfhjWe3JZtiEuMdEA&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAL2cgoguMPsnbPMxd7F9OxMyMM-mUcG74MZFrmmDGIX9AiEA0cA82LGOGKBZhxwRLk9fR37EjYwauFwytQPSGzDf2oc";
link_list[31] = "https://rr5---sn-5hne6n7z.googlevideo.com/videoplayback?expire=1634081488&ei=UKplYbelNJyl0_wPmMmS4A4&ip=2a02:4780:8:a::5&id=c66041bb9da5b147&itag=18&source=blogger&mh=uZ&mm=31&mn=sn-5hne6n7z&ms=au&mv=m&mvi=5&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2624.644&lmt=1423933446130578&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIhAOMF2H9bnfRYEoDpyS7_dF8O0iBJpwCA9Xl8OAATHcnzAiBfrtwV2baiG5ypdczT6WxWmfaKCaEH4EK8W0cQVZ6D7g&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgD8ypqauXSR9ady0RMhxy4GivcewLZOD_AiscVeyNwGoCIQDw8DTRc9e-optL6ErH3RuRB0LtOwd6lh0QUgu9frq2hQ";
link_list[32] = "https://rr1---sn-5hne6nsd.googlevideo.com/videoplayback?expire=1634081490&ei=UqplYZe3LNu10_wPyOGm2AY&ip=2a02:4780:8:a::5&id=22fca0c5a7377d06&itag=18&source=blogger&mh=9_&mm=31&mn=sn-5hne6nsd&ms=au&mv=m&mvi=1&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2620.046&lmt=1423933525964340&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIhANPWrUyiW1h6_ZSlX0_Om8u3CRzTPB2Bv8BJ-qdgGDewAiA9BeaHrFCLOHiWqpAUY-yZX6zAEpa6xbhOipW4iVVNTw&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAKW9ZaOqvO6PT5Hn9Ej6LUdtlXbMBUOyBIPgNfRfY0Q5AiAk5Yyw-F_NIZBYLALsETpdeH38sd_VinFnxSk4_RPbSA";
link_list[33] = "https://rr5---sn-5hne6n7l.googlevideo.com/videoplayback?expire=1634081493&ei=VaplYfC7MPOl0_wPyMeIkAs&ip=2a02:4780:8:a::5&id=92d30e95b2a80e62&itag=18&source=blogger&mh=v6&mm=31&mn=sn-5hne6n7l&ms=au&mv=m&mvi=5&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2625.457&lmt=1423933550449920&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRgIhAO6mT73xXBN0jptzaaj1dvmaFwrpKvXI9UaQ2SN_tW6hAiEA3SUZDeGAZQfCbjL50tHso0FmF-aFkZ_Elz0bKsMThdw&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgEqSysWBnW1psS646cZzfKDmwjcTXzW7ZqPSr0cA4rIMCIQCxxctm6qinkCcERmb9tVBp9cnvhuHyZROxx5anRV8iVQ";
link_list[34] = "https://rr4---sn-5hne6nsk.googlevideo.com/videoplayback?expire=1634081495&ei=V6plYf6PKLD1zLUP_-64oAM&ip=2a02:4780:8:a::5&id=aadcd5da8811b4b3&itag=18&source=blogger&mh=6X&mm=31&mn=sn-5hne6nsk&ms=au&mv=m&mvi=4&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2645.519&lmt=1423933443848580&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRAIgEshBBKB0Rfzvlpm0TyiLPgEmuEhUwNmREdT3AQl83FUCIC90BTR5MdcIzT34C_NmaTOaGQp6Mhirs9SsI8bY02cf&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgH_NnYCsZ56UydphiXF1UfBxAm5mgqUsq9MhjTnli-lACIBMscMS6fUQDBaYjc0zkHJcD0UOFlbrmOHaGN0j-B7EU";
link_list[35] = "https://rr5---sn-5hne6nsz.googlevideo.com/videoplayback?expire=1634081497&ei=WaplYZ3iIvi10_wP75GxkAI&ip=2a02:4780:8:a::5&id=03c70a37d9662f51&itag=18&source=blogger&mh=pT&mm=31&mn=sn-5hne6nsz&ms=au&mv=m&mvi=5&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2776.270&lmt=1424083921940840&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIgDgxmoCyvOp6DyiQ_roFnQ1v17-P4jvJxTLnm_mvh2m4CIQDJm6XwSw4UHtZOQdnZZQrnu7uK1GH5wru6M4eHs4edpw&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAMJJ9h1QLKWAiA-gwcoNvV5STdyhI-3j-32yqRZr4f5xAiA4zJNr4k_Wuyr5CGTii4XHBfuAhn9V3BZZ2zvjuc_ueg";
link_list[36] = "https://rr3---sn-5hne6n7s.googlevideo.com/videoplayback?expire=1634081499&ei=W6plYe_EGuCn0_wPja2NkA8&ip=2a02:4780:8:a::5&id=69e7b6fbb8bb3ce4&itag=18&source=blogger&mh=oO&mm=31&mn=sn-5hne6n7s&ms=au&mv=m&mvi=3&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2719.428&lmt=1424084061447184&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIgHUS0pvtfbvjdS2nqjmdYqnZc3UqMmajIuG9TDbfc59MCIQDVI7Bm69lxkZtp-RVO_qtpoq_dshSPFsvTNLiYEiEHFg&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAMqbwLQg7iWDz9TcL3A_mhoi-r9eYhmP6K9CaSywolqDAiB-8BirLubewSs0ma6tot06Nhg74rpvgrbBwIguFUxWbg";
link_list[37] = "https://rr3---sn-5hne6nsk.googlevideo.com/videoplayback?expire=1634081501&ei=XaplYcCVCOz0zLUPgemE8A0&ip=2a02:4780:8:a::5&id=db38791d3cfb893f&itag=18&source=blogger&mh=hd&mm=31&mn=sn-5hne6nsk&ms=au&mv=m&mvi=3&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2775.481&lmt=1424085548474115&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRgIhAIBrP1R58zHvQ5Si-ART6v162nTzE4_HzEKj5-KlhcjPAiEA8SVhQWG3loKUFFpKXjurCMHMS7evu8CrW4_ajrVhQ0g&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgTiVbzQ3wCT5mpDmQjZon8nGphVztZr8ZyC8zL99HSfgCIFZCjv_c-D_Hiyg3Z_mpy2smW5ZyIl66YJrbiDiBjjIq";
link_list[38] = "https://rr3---sn-5hne6nsz.googlevideo.com/videoplayback?expire=1634081503&ei=X6plYariA7W50_wP-Zmp4AM&ip=2a02:4780:8:a::5&id=ab8151264b81705f&itag=18&source=blogger&mh=0d&mm=31&mn=sn-5hne6nsz&ms=au&mv=m&mvi=3&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2775.156&lmt=1424084061007922&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIgDjK3TqlSj0bwVEcZRqWZ5mnHJC8gIAUtigD1-qSTtnwCIQDR9zFBfMIoFw__uqjZBVZyzCE90PnP4bRXayr3T6zU3Q&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgHxL3xKN6-mJT7AtMHlJZTVo802C3nQNVvQGjmMIR11gCIEWOpq4J_e2DxKaaZfGK2zuKMdoYo5oS7ffQ9kOH5_jV";
link_list[39] = "https://rr5---sn-5hne6n7z.googlevideo.com/videoplayback?expire=1634081504&ei=YKplYanLONSp0_wP39aE8AI&ip=2a02:4780:8:a::5&id=4e873d9561780d9e&itag=18&source=blogger&mh=Kl&mm=31&mn=sn-5hne6n7z&ms=au&mv=m&mvi=5&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2776.200&lmt=1424084160266850&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRgIhAOqv0e_-CEyRJ-tXle8PI_5iz315JWrZEJ9bRZCOeewlAiEApHIjvGo50MFayJTpomWk_FAi-87diD2xPRX4_JtiWoE&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgbL30OTO8xXGOk9T4SYVlL4lVb-xU-tQrkUcl9y_5MQUCIFcxrzZAAeJxVV8lAbZmElbUSvhws6tRiIRgcpGg4lIK";
link_list[40] = "https://rr1---sn-5hne6nsz.googlevideo.com/videoplayback?expire=1634081507&ei=Y6plYYfTHZb7zLUPvICwkAM&ip=2a02:4780:8:a::5&id=01a729280f054c13&itag=18&source=blogger&mh=kY&mm=31&mn=sn-5hne6nsz&ms=au&mv=m&mvi=1&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2758.344&lmt=1424084040291897&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRAIgQunc18GTrNwEH521E8C7cndUyNPQDprg3h5Bph5999oCIEFZgxw022xsDGivWEQbJJ4ggXBVOVVEk0jF2i7dO7_x&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAIZo-wYfvSiey6kQqB2JlQWvdUFp5Jgtw_NEu4TyzZ4lAiEA21kqYkZV-9eR58xy0MZ4foRjjRewPW40EN1E3FeTXRA";
link_list[41] = "https://rr4---sn-5hne6nsd.googlevideo.com/videoplayback?expire=1634081509&ei=ZaplYZGzF8C40_wP2KKuuAE&ip=2a02:4780:8:a::5&id=0f69e9fd252b4c25&itag=18&source=blogger&mh=RS&mm=31&mn=sn-5hne6nsd&ms=au&mv=m&mvi=4&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2771.974&lmt=1424084046755505&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRAIgchRPF7GSaE31vh841gMe35HaWBaKGf3LRA3yFrl_2LYCIFsHi2-dhYDNh7fOfYR3HdOTuEu2QurjUDFyQojD--S5&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgat-glK7srsvIrgrGpwxtwvK_N22eIk5eRGaG6PA9FyECIBj9KKaHQXHzC2UMTevo2a-ePLFbz-ReKyi6Q-UdgZSH";
link_list[42] = "https://rr4---sn-5hne6nzs.googlevideo.com/videoplayback?expire=1634081511&ei=Z6plYdKkEp-y0_wP5KadqAs&ip=2a02:4780:8:a::5&id=669dbfda6090d62c&itag=18&source=blogger&mh=L4&mm=31&mn=sn-5hne6nzs&ms=au&mv=m&mvi=4&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2711.719&lmt=1424084030436900&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIgFgsdJa4JwBkhhsp5zCztKNxdj-k3iQ9xjsA4GtGlrwsCIQDDqrxcy0k5a-pAunhoq73vKDKcrQ_mPNmPc7XUvAdSMw&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgDLQKqT0QAH_lqyiTAPbpW1sQoJ8ugQmNGqmB3rBaoAkCIQCT-HnArhskxtD7moMzKrOqHXfs-CECu1fBfk0oDHFfeQ";
link_list[43] = "https://rr6---sn-5hne6n7s.googlevideo.com/videoplayback?expire=1634081512&ei=aKplYduJO8-l0_wP5MekkAE&ip=2a02:4780:8:a::5&id=e4d9e64d2750ef36&itag=18&source=blogger&mh=3y&mm=31&mn=sn-5hne6n7s&ms=au&mv=m&mvi=6&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2773.275&lmt=1424084015924077&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIgR5F9gP_4F4oifoS3mtgjahxEpTKy0qw5hSSfbmEdV6wCIQCtie16J3aR3GeosglzNrF2qPvbclJ8ER7nlUQJEP522w&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAOnPFnFYv113glnHzxGAEVBwGWtepwk3jMriOvd0RMtOAiEA-LcLRlJ-BTSl1Z5p2CV-ZFtJZcEonb9SGs_zurQWSYI";
link_list[44] = "https://rr2---sn-5hne6nsy.googlevideo.com/videoplayback?expire=1634081514&ei=aqplYebsN638zLUPvtm1-A8&ip=2a02:4780:8:a::5&id=ee1a7fd0b8569a8d&itag=18&source=blogger&mh=BK&mm=31&mn=sn-5hne6nsy&ms=au&mv=m&mvi=2&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2717.756&lmt=1424084270523229&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIgIzgJSqmjDzdrlsInHmAQOK7232amuPkuKJeCHxu1LmkCIQCm33qj6--NVbR8Aep9MLX8KTm9-oegPULUfYNen080WA&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAMnFDBDxfhZYBTyR4lqRDDIrzfzPJ0VN6CIdkR414Oz-AiEAoXqTz9sevPmzM-vIoxQg4OGXeHu2BCAwb_5631U9etE";
link_list[45] = "https://rr1---sn-5hne6nsz.googlevideo.com/videoplayback?expire=1634081516&ei=bKplYZ_uLJu00_wPtoqpyA4&ip=2a02:4780:8:a::5&id=878b3f47881365e7&itag=18&source=blogger&mh=xw&mm=31&mn=sn-5hne6nsz&ms=au&mv=m&mvi=1&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2773.391&lmt=1424084037748547&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRgIhAJ18B0g2HJqlWK2nZvrAYSdVXEcZwm2cub7Kj3WnF_OuAiEAzfKZZTO8SQVrGVYoTCoTRG6qyhZVTqwqliKLk0tj33A&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAI5_UYy6au9i6RgIXIqmrguFZehE4Xt9AD9QbU8RncP0AiEA-ie4tXL6syTCt6EU83WIDrT-FQB-Hro2S2_MOCjR29c";
link_list[46] = "https://rr3---sn-5hne6nsz.googlevideo.com/videoplayback?expire=1634081518&ei=bqplYcv_IOyg0_wPjMWm6Ag&ip=2a02:4780:8:a::5&id=77f1ccf47fa2829b&itag=18&source=blogger&mh=Bw&mm=31&mn=sn-5hne6nsz&ms=au&mv=m&mvi=3&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2741.789&lmt=1424084060751893&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRgIhAKIG3jz5A09k_wnP7taUglPywuhA54jlsIaXdiMYAlB9AiEA1WuehS6ORaZuXCcuUSu-Ob4LOmtN838_t9TVF8zxNAQ&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhALnPAzJl1L7gQaBG8q5TQj3_fpljNrJmo_2tTKeyy2KNAiEApwLUHxPXsbMXzzUnnHNuCRyDxaJ5O-5Gxe3yZrx5mV0";
link_list[47] = "https://rr2---sn-5hne6nsz.googlevideo.com/videoplayback?expire=1634081520&ei=cKplYcr8GLy00_wPx6qD4AY&ip=2a02:4780:8:a::5&id=e8bb1db27810d249&itag=18&source=blogger&mh=7M&mm=31&mn=sn-5hne6nsz&ms=au&mv=m&mvi=2&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2776.526&lmt=1424084093044112&mt=1634052302&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIgHXBaDu8W3XE0icXAW4-2Cz3FSLzpIwU7UUkRcm4KHQ0CIQC0VT5l7yuQAhMUYgfo8NfHqAC_c_6i6R4R3G81Nx1bXg&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAM4QQCeKhIV-1tD-mvEIdH8UTvUHPKbXD1UplBr_fg5sAiEA2bM7nWTx-H53veJSBDb6BGRPMeZeoxxEYF_5dWKuTds";
var temporadasNum = temporada_listLastIndex.length;
var currentTempIndex = 0;
var currentTempNum = 1;
var currentEpisodioNum = 2;

var video_title = document.getElementById("video-title");

var flagOnline = true;

var video_player = document.getElementById("video_player");
video = video_player.getElementsByTagName("video")[0];
video_links = video_player.getElementsByTagName("figcaption")[0];
//alimentas o novos links da base de dados
for (var i = 1; i < link_list.length; i++) {
    var link = document.createElement("a");
    var imag = document.createElement("img");
    link.href = link_list[i];
    if (flagOnline)
        imag.src = "https://via.placeholder.com/400x150/000000/FFFFFF/?text=Episodio-" + (currentEpisodioNum) + "-T" + currentTempNum;
    else
        imag.src = "seminternet.png";

    imag.alt = "Lie To Me (Duplado) - Episódio " + (currentEpisodioNum) + " - T" + currentTempNum;
    imag.title = "Lie To Me (Duplado)- Episódio " + (currentEpisodioNum) + " - T" + currentTempNum;
    link.appendChild(imag);
    video_links.appendChild(link);
    if (temporada_listLastIndex[currentTempIndex] == i) {
        currentTempNum++;
        currentTempIndex++;
        currentEpisodioNum = 0;
    }
    currentEpisodioNum++;
}



source = video.getElementsByTagName("source");

path = '';
currentVid = 0;
allLnks = video_links.children;



lnkNum = allLnks.length;
//video.removeAttribute("controls");
video.removeAttribute("poster");

function fetchVideoAndPlay(link) {
    fetch(link)
    .then(response => response.blob())
    .then(blob => {
      video.srcObject = blob;
      return video.play();
    })
    .then(_ => {
      // Video playback started ;)
      video.play();
    })
    .catch(e => {
      // Video playback failed ;(
	console.log('Video playback failed ;(');
    })
  }

function playVid(index) {
    console.log(link_list[index]);
    video_links.children[index].classList.add("currentvid");
    //video_title
    video_title.innerHTML = video_links.children[index].children[0].title;

    source[0].src = path + link_list[index];// + ".mp4";
    //source[1].src = path + link_list[index];// + ".webm";   
    currentVid = index;
    video.load();
    fetchVideoAndPlay(path + link_list[index]);

    window.scrollTo(0, 0);
}
for (var i = 0; i < lnkNum; i++) {
    //var filename = allLnks[i].href;
    //link_list[i] = filename.match(/([^\/]+)(?=\.\w+$)/)[0];
    (function (index) {
        allLnks[i].onclick = function (i) {
            i.preventDefault();
            for (var i = 0; i < lnkNum; i++) {
                allLnks[i].classList.remove("currentvid");
            }
            playVid(index);
        }
    })(i);
}

video.addEventListener('ended', function () {
    console.log('ended() :' + currentVid)
    allLnks[currentVid].classList.remove("currentvid");
    if ((currentVid + 1) >= lnkNum) {
        nextVid = 0;
    } else {
        nextVid = currentVid + 1;
    }
    playVid(nextVid);
})

video.addEventListener('mouseenter',
    function () {
        video.setAttribute("controls", "true");
    })
video.addEventListener('mouseleave', function () {
    //video.removeAttribute("controls");
})

const checkOnlineStatus = async () => {
    try {
        const online = await fetch("LieToMe.png");
        return online.status >= 200 && online.status < 300; // either true or false
    } catch (err) {
        return false; // definitely offline
    }
};


const validaOnline = async () => {
    const online = await checkOnlineStatus();
    if (online) {
        flagOnline = true;
    } else {
        flagOnline = false;
    }
}
//validaOnline();