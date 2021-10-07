var temporada_listLastIndex = new Array();
temporada_listLastIndex[0] = 12;  //temporada 1 tem 13 episodios
temporada_listLastIndex[1] = 34;  //temporada 2 tem 22 episodios
temporada_listLastIndex[2] = 47;  //temporada 3 tem 13 episodios

var link_list = new Array();
/// - T1
link_list[0] = "https://rr7---sn-8p8v-bg0l6.googlevideo.com/videoplayback?expire=1633568066&ei=wtRdYcqzMafw8gSB8rGwDg&ip=2a02:4780:8:a::5&id=04541639e3f5c8b6&itag=18&source=blogger&susc=bl&mime=video/mp4&vprv=1&dur=2802.973&lmt=1423775605801162&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRAIgfl8eLBj42232q4Zn97tY63F5JhjIiqhOpgyYb8EfzYACIFI7kDYFKrYd1ibeFKgzWXHK9eXaH70HesSxzdJRJtFt&redirect_counter=1&rm=sn-5hnesl7s&req_id=fc782cdeffc6a3ee&cms_redirect=yes&ipbypass=yes&mh=1o&mip=2804:431:b725:ec55:595c:ba04:7bd5:9a6f&mm=31&mn=sn-8p8v-bg0l6&ms=au&mt=1633539183&mv=m&mvi=7&pl=60&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgVSQNLO-2bTSEFkEGoVHW3Zm4UkFMGBqte-MaP-R_HdoCIQClWb6-mZkC6QPOGa2Gwo3aIcp6kgi9_pan0Vd55RfEug%3D%3D";
link_list[1] = "https://rr4---sn-5hneknee.googlevideo.com/videoplayback?expire=1633581243&ei=OwheYYHVIcC00_wP7aCG8Ak&ip=2a02:4780:8:a::5&id=323c63be460fb49c&itag=18&source=blogger&mh=rc&mm=31&mn=sn-5hneknee&ms=au&mv=m&mvi=4&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2638.808&lmt=1423775783821936&mt=1633552147&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRAIgL5B1ndJNTJ-dE__gFmZx2Gp68waLfjqNZHWFRtrX9pwCIGIgGL0NwXq7nAE68OQs_nRquCMl0eM7C1P-ZTVIjzrH&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgMkMHVJodVZSNZfz0Pm-sS6NbjIgmeFNq3DEc-_i80zUCIQDurcnjLUIZXdgra_pa3auJKzM6vhxdbiVVSGCMQ97FAA";
link_list[2] = "https://rr5---sn-5hneknee.googlevideo.com/videoplayback?expire=1633581630&ei=vgleYenGAo-qhwbBmpOYAw&ip=2a02:4780:8:a::5&id=aa34998c33ea189b&itag=18&source=blogger&mh=Ng&mm=31&mn=sn-5hneknee&ms=au&mv=m&mvi=5&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2642.802&lmt=1423775856464859&mt=1633552390&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIhAOfYhPno0Vrj6L2r85tRTra05jbRuOVgY9hsgvMnveoYAiAfkdmI6PCWQWhxG4s4qbMk4SOW2YoAoZT7ipCViwK5gg&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgRkm3QdHTGoryiwLnivHkUtHRKNHjD9ZzKexTwDAZ-OICIQClXvFL_-g0i2R5HoiC7p5riVk-6dWNhiHxJenSJ5y_nA";
link_list[3] = "https://rr6---sn-5hne6n7l.googlevideo.com/videoplayback?expire=1633581741&ei=LQpeYbGUMtWVmvUP5LmSkAo&ip=2a02:4780:8:a::5&id=e6634580aed277d7&itag=18&source=blogger&mh=ua&mm=31&mn=sn-5hne6n7l&ms=au&mv=u&mvi=6&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2575.719&lmt=1423776453068731&mt=1633552521&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRgIhAPsKylKPQazVCsnHUUapjtNQ_ySM-1XsfF4RvbUMIb3IAiEAuby4noFgsdkUAF_hISbrhH5kZD9bGkGadkkKtntvQ7s&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgEY7wVOLpA52fd7v3u6vyXnkQbP1gB7UAKcxIfimjiFICIQD5Caid_W_ev8qNS76xXuplJgOFu3ra6ncoV2i5KZ4zkQ";
link_list[4] = "https://rr2---sn-5hne6nsy.googlevideo.com/videoplayback?expire=1633581798&ei=ZgpeYffSAuzUrvIP_OqDqAE&ip=2a02:4780:8:a::5&id=1778717ef50711bf&itag=18&source=blogger&mh=4-&mm=31&mn=sn-5hne6nsy&ms=au&mv=u&mvi=2&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2639.806&lmt=1423775855303759&mt=1633552521&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIgQGWFZI16NjgXRIDszM7KI0i-i8rP0sDHFOvN_U9tSQ4CIQDZY3qt4ewN4nmvf1M6utRkaorWJddhh7pfl3RvOk1Onw&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAIf7jUuZ_h2Ilp-ypQ2BVGBc-iXL8NNUWbdCVZ8alL-uAiBWXgdPXLTzk58dYsfCcjVv4B79z1zzIKvBdn8GmtTy3g";
link_list[5] = "https://rr2---sn-5hne6nsy.googlevideo.com/videoplayback?expire=1633582154&ei=ygteYd_NN8m_gwPbloewCQ&ip=2a02:4780:8:a::5&id=bf5b3c6dcd3ed29b&itag=18&source=blogger&mh=1I&mm=31&mn=sn-5hne6nsy&ms=au&mv=u&mvi=2&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2631.796&lmt=1423775832354205&mt=1633552521&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRAIgZIYcUcluxKgJP0aKv3q5Y5hMD-He8cR51MI5XPuSeZsCIHtccHVNAJIsPs2n_cJwA_ryXyMCBmNgqZcY9t0gjBDI&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAKfRXi4pRzbj0KeOVqUKt2IS_0olPIPtjSlg69sfTzskAiBBnIUz4kNNQ88hG4vB5XFE65e1GQie8OT-Z1QuNRbifw";
link_list[6] = "https://rr3---sn-5hne6nzs.googlevideo.com/videoplayback?expire=1633582561&ei=YQ1eYde6C5HNgwPrnoq4Bw&ip=2a02:4780:8:a::5&id=acce9de661db1d40&itag=18&source=blogger&mh=H6&mm=31&mn=sn-5hne6nzs&ms=au&mv=u&mvi=3&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2635.789&lmt=1423775801612810&mt=1633553258&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRAIgborM-OWxI2H6Lu7sJRXTA1W6BqMxVG8FSYlibyVuf3gCIHeUk7zIWQ8kzWZFPK9Oi5U8poKdI5KT7cocAGFl9HxC&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgEUsV_7jXjk0sntzkE67XCpclSIGbwrJMXPouC1xFb8oCIQCfaExghQ3aCV0ztZmspF4Md8yOhKI-BMlw8j3HpjtLFw";
link_list[7] = "https://rr5---sn-5hne6nzs.googlevideo.com/videoplayback?expire=1633582596&ei=hA1eYb7kOIrj8wSr-oko&ip=2a02:4780:8:a::5&id=bed0390705b79e07&itag=18&source=blogger&mh=Wa&mm=31&mn=sn-5hne6nzs&ms=au&mv=u&mvi=5&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2638.762&lmt=1423775774272404&mt=1633553258&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRAIgGtzrM3AFNebP8S8Efic3baLySWbbTmJvMO4CYOYOIzQCIAkH5i68WlWkM8-e1ODcbsBV5ro5A34dQAhOYznSW1hq&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgCazhwQhIeUW_nyOc7HexgcBD2Suby6ClL6ZyxMLSYcUCIQDwThebIBhXBjM5LVnOA_HtNvnZFLYG7T4R6gSGpjcNaw";
link_list[8] = "https://rr3---sn-5hne6nsy.googlevideo.com/videoplayback?expire=1633582648&ei=uA1eYaiHLKGH_9EP0_KY-AY&ip=2a02:4780:8:a::5&id=c5cdb0a9de05e279&itag=18&source=blogger&mh=kb&mm=31&mn=sn-5hne6nsy&ms=au&mv=u&mvi=3&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2585.704&lmt=1423775896100550&mt=1633553258&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRAIgE5aovaSWylDBRY1RubYuzAN9AEX6Amqbvk85pqysvMICIBiGa3Bv18-CAtVT3FVCSA0cxTB4UPOV4w3lPY4okEft&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhALsbDoeZAovDLmVppqhHr1jiBoRPWmj9OloSRKeKO5u0AiAnfX2kBvwXTPC9wTw79QR4d5_2XsJX5UR_KadNLATe5g";
link_list[9] = "https://rr1---sn-5hne6n7e.googlevideo.com/videoplayback?expire=1633582690&ei=4g1eYfjAIoSF2LYPsdSZWA&ip=2a02:4780:8:a::5&id=55d97a01c77b3fbd&itag=18&source=blogger&mh=Cm&mm=31&mn=sn-5hne6n7e&ms=au&mv=u&mvi=1&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2642.755&lmt=1423775808899134&mt=1633553258&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRAIgOA7bR-IIWKn0b_U1qK6bECamVbyk7x_4wpNNbfhh2A0CIDteRX41hImzrarIE2TvY4OYtPIi75tZL5nDoYveelh3&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgQqIGHog6Z4qz9OOiHT2fhJBfYODKmth-dfmaRSYaB-ICIBe9WSAvZyXxoCY9ZZ1x8qn-UF6l-maNCpPPTEJjzk1Q";
link_list[10] = "https://rr1---sn-5hne6nzs.googlevideo.com/videoplayback?expire=1633582720&ei=AA5eYbnHE8_h8wTc4qjgDg&ip=2a02:4780:8:a::5&id=4e77e894f1325f3b&itag=18&source=blogger&mh=jq&mm=31&mn=sn-5hne6nzs&ms=au&mv=u&mvi=1&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2637.810&lmt=1423775779641135&mt=1633553258&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIhAM0daa4oF8foZ2h2J0u-qmC3P9zyBd4a9GayAo_CAfYoAiBDpjcRn0BmUnSJQtlK5sKpoCkbvwHNer9Ay8cecgHPOQ&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgYT_RnUPvIwLaEMS9e8A_-gvK8zj_WHNlWfPEWEmw8dACIHwJuXQrPnRfRT2q2SsYigL66vhD2JwLPw3IlBnrDN3A";
link_list[11] = "https://rr1---sn-5hnekn7l.googlevideo.com/videoplayback?expire=1633582791&ei=Rw5eYdKtNvCXhwb5qoeYDw&ip=2a02:4780:8:a::5&id=2d64969fed1d1426&itag=18&source=blogger&mh=Aj&mm=31&mn=sn-5hnekn7l&ms=au&mv=u&mvi=1&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2644.799&lmt=1423775894224332&mt=1633553258&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIhAOV95cDeB-qAq3-5coXqUIuOvh39hNbD0K_8eRebtvBpAiB3GMYrYDmWIj9oRtKu4CG7OiwKvuLMdOaZK1gdDs_JsQ&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgZrTLH8qwbSFcw1jUuOM46WmJ5Dy2Ts20hPTnvqXVFrUCIQDUBmh3OekR7qOZ5eMSfu4_tbk7OW8H1i-RxmK3v0U43Q";
link_list[12] = "https://rr4---sn-5hneknee.googlevideo.com/videoplayback?expire=1633582844&ei=fA5eYebUFpbkhga--5n4Bw&ip=2a02:4780:8:a::5&id=4338962d91d842f1&itag=18&source=blogger&mh=XK&mm=31&mn=sn-5hneknee&ms=au&mv=u&mvi=4&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2640.828&lmt=1423776080761530&mt=1633553258&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIhAIHRGW0nSYuIVSA7G7T09L10AXvvXdgMN0ySvlUbPnIUAiAm2Jne9XfB_Yt97bfXicVNUSRJqrdb9hucH54v5juxiQ&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAPuS8IeSV2BJCK6yUNCoykcw6SySsUo8us4n8wyr3C1SAiEAuGMfv3PH-PYym-QDBBXGreYB40BYNWl8JdOpdWoWUTA";
/// - T2
link_list[13] = "https://rr5---sn-5hnekn7z.googlevideo.com/videoplayback?expire=1633590595&ei=wyxeYa3FNcuP8gSLt4XgCw&ip=2a02:4780:8:a::5&id=9dec1d203e1003f2&itag=18&source=blogger&mh=Om&mm=31&mn=sn-5hnekn7z&ms=au&mv=m&mvi=5&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2645.077&lmt=1423933148388459&mt=1633561491&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIgGwbjshuNXjK_W2iQ_WyaZqReDUcmIDiNZzo86TCDkv4CIQC97shW1fAWkKRZfiL3QQz7aSKWVLdApOwXJIQr5yenUw&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAOQM5rbvjdN42Ion5K8qa8etgbF_7PkWHLm37b5hhdxrAiEAs7oXdK2Vgcv6a1tR265xxEzsUOOBgjEG9GEp9cbQG4I";
link_list[14] = "https://rr5---sn-5hnedn7e.googlevideo.com/videoplayback?expire=1633590699&ei=Ky1eYYHmGMy4gwO3ooyABg&ip=2a02:4780:8:a::5&id=63e2acfda49487e5&itag=18&source=blogger&mh=L1&mm=31&mn=sn-5hnedn7e&ms=au&mv=m&mvi=5&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2639.760&lmt=1423933427212436&mt=1633561729&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRAIgHVAXpdcff4xIiViKQhTSo8ZVffDmG2fl3fowzMwij1ACICKydmz0rW_sdRChHOCf-sqT-C2tBcMgaptEXr51tHEW&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgcMlHBgpWgfkzq3HbufmlKz-kY7u2qR5U-2ML78sQZ1ICIQDAt8bG_3peI-Olj163fDMSI4gBJg5_Ca0L4MiPIgEsrA";
link_list[15] = "https://rr6---sn-5hnedn7e.googlevideo.com/videoplayback?expire=1633590806&ei=li1eYY2rJufk8gSbvL6QCw&ip=2a02:4780:8:a::5&id=fb3ea0b6178df704&itag=18&source=blogger&mh=_v&mm=31&mn=sn-5hnedn7e&ms=au&mv=m&mvi=6&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2645.519&lmt=1423933254632856&mt=1633561729&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRgIhAMERNxFq1CdP6HPH836m_KVyj2RnWCmfVE0r-mKnsqa5AiEA_DJ8c6Jzry37dBVIh80Ku5VD-CQlOS0VQ4a1Vd5Re2c&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgCmUowtiC1EbvAD0QE1GuBPIGNWx9KEmFrMRNoV24OJsCIQCSajiz8b15c3yiQlXvJ4T-eA8kNHR5JCBB35i5HzFtEQ";
link_list[16] = "https://rr1---sn-5hneknee.googlevideo.com/videoplayback?expire=1633590990&ei=Ti5eYc7rD9aI2LYP9smkuAI&ip=2a02:4780:8:a::5&id=de5be36fda31f9cc&itag=18&source=blogger&mh=kN&mm=31&mn=sn-5hneknee&ms=au&mv=m&mvi=1&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2654.690&lmt=1423934284230359&mt=1633561729&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIgbDmz6LwBlqw6MopH5h3C7VVp297artTM_jhyrWaVdL0CIQCSwvLkxaUEQJKfFiDDeyijmVXf_gyRZZG7bC7qTYAWAw&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAJ5HQJem7fWYOOSLn1i8m3fmDOgdzn3BWr47WdEIaS44AiArhm2BNpd46wyBDIP1z6_tTuoSqRkTQtzQy9sRN7g7qQ";
link_list[17] = "https://rr2---sn-5hne6nzs.googlevideo.com/videoplayback?expire=1633591066&ei=mi5eYe-IO4PrhwbqoZqYCw&ip=2a02:4780:8:a::5&id=a0871d2a19981996&itag=18&source=blogger&mh=h6&mm=31&mn=sn-5hne6nzs&ms=au&mv=u&mvi=2&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2642.546&lmt=1423933368177050&mt=1633561548&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRAIgMR0YzCtYvUDTv6e5VW5CblkNNghxaBjqHp5IwI5-Sr8CIGBm3wW1eD7MpazwR7DW5iHGXzfCWRvOinU7RPpXMC9_&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgbfO536FdbL075HYUHMAZ82b0S2UGd0UFcoQkpS7-KtcCIQCo6dNt_MBw85YeU5CX48m-cUdpQnsZ-aZ9DmuJCeXZ5Q";
link_list[18] = "https://rr3---sn-5hne6nsk.googlevideo.com/videoplayback?expire=1633591138&ei=4i5eYeriAoWyhwbeuJ6wAg&ip=2a02:4780:8:a::5&id=79e8ac240a759423&itag=18&source=blogger&mh=vz&mm=31&mn=sn-5hne6nsk&ms=au&mv=u&mvi=3&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2644.009&lmt=1423933516920488&mt=1633561548&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRgIhAP7u1-Y5W2zd8_050Fg9nVLrn4u5BRLzxqaDG8UPEPA1AiEAwxLaMKhvDn3rNrY89vguBq6h3rnvFXf4tgCRsz27LWs&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAPU2P9qN0pT14OI-qjm_7RoEbJCm0K_GLCN084KvaxIkAiEAjpkgG1sao7YXcbjCkFodUlPK-Gq_2CxMATp2wLad5Hc";
link_list[19] = "https://rr6---sn-5hne6n7e.googlevideo.com/videoplayback?expire=1633591207&ei=Jy9eYejLIcnWhwbV3Y2YBg&ip=2a02:4780:8:a::5&id=c6d4357df7fb8bf6&itag=18&source=blogger&mh=A8&mm=31&mn=sn-5hne6n7e&ms=au&mv=u&mvi=6&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2644.868&lmt=1423933517125192&mt=1633561548&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRgIhAKBV6LNCVsSVyWBPRY_OFDzHQnF4M8Mip0CPDKnudZCTAiEAzAcfPfwZEBR4viZshfUwLyXK3PaE0zEOCyXBor34Wo4&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAMXcTuaiNy6ew8zld2MqPZ7MI3fDfA8Be5ZcXJ56D2bnAiEAzTLXUDbbISznMA9T6_9FMAGq-glnw_ERlRvVoKHpfdc";
link_list[20] = "https://rr4---sn-5hne6n7z.googlevideo.com/videoplayback?expire=1633591385&ei=2S9eYYyeHIWWhga_uK3oDA&ip=2a02:4780:8:a::5&id=941354b7f26b34be&itag=18&source=blogger&mh=Vf&mm=31&mn=sn-5hne6n7z&ms=au&mv=m&mvi=4&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2620.789&lmt=1423933342942447&mt=1633562213&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIgM5DyJkUCThExLtGgf4iLaJ7EgrNzAli_PVPcotAN03oCIQDBNkGzjyqIJp9PIhc1U9rDiQkIgELft8Q9rXIbDfhbZA&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgTh3OSqYO9nvS0mtGABncygDgGqSr8y763zZhp2e5IqUCIQCuX10JE_7Oox5mcyEH-XzjyHpci0vXsReUr0Kz29L1Wg";
link_list[21] = "https://rr3---sn-5hne6nsk.googlevideo.com/videoplayback?expire=1633591439&ei=DzBeYfHvB5nJhgan8rSgBQ&ip=2a02:4780:8:a::5&id=aaa1ccc72529b5eb&itag=18&source=blogger&mh=ZA&mm=31&mn=sn-5hne6nsk&ms=au&mv=m&mvi=3&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2620.395&lmt=1423933420485189&mt=1633562213&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIgcz_ATNVRp-NRl348I9UYfd5c4FI7d2wnXGuPTXVO_v8CIQCZ_LFDK5hxf5gUvHtg69JA2ByNkSsw4fh7gHyqwKekyQ&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgeC9Auj_HzSGU3JJgVvm4mimvGRRhkQgbl3JJ3mb8zk8CICzjGD3DU1cwXTEwv0817BfXOio3rwReNpQWpr2OzzYP";
link_list[22] = "https://rr3---sn-5hne6nsr.googlevideo.com/videoplayback?expire=1633591507&ei=UzBeYdjbGM_j8wSa8rEY&ip=2a02:4780:8:a::5&id=7b9c7aa3b8e5358e&itag=18&source=blogger&mh=jL&mm=31&mn=sn-5hne6nsr&ms=au&mv=m&mvi=3&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2583.962&lmt=1423933438780511&mt=1633562213&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIgVDe-OB9VZnO2EjM1sAeBl9w53oS1cNJEv8zyswMmw60CIQDdZYF8uXu7-BUEGtOZNU45wnWnX4hupRNuVrq94ANQKw&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAL9JwiYj6heUry-teX1wWcWGkYySR399p0-Gi5p4ByNHAiEA75w3yqXEcwgOeChWG7fsnUHmG6Jd6vuQYdVz8KwYRSw";
link_list[23] = "https://rr2---sn-5hnekn7s.googlevideo.com/videoplayback?expire=1633591581&ei=nTBeYfPuIcbegwP-75SYAQ&ip=2a02:4780:8:a::5&id=74e939a11a1cc7c3&itag=18&source=blogger&mh=QW&mm=31&mn=sn-5hnekn7s&ms=au&mv=u&mvi=2&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2645.542&lmt=1423933493804608&mt=1633562232&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIhANxgqCh7VAoFWcrnuw0uAVi7lVqh3yjoqWIQXXbtCoTzAiBKvRFEgYKkbHeri8RiVRnSEPqsL2ZdgKfGPTY8qliV3w&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAKwOHh64-cjUzV9_lZ0ZJSQF32n989FGS9dFzzIhQ95qAiEArDqGakrcUnEUMk3rDXwuORuCTXKa8cAWxVrcVsqUrB4";
link_list[24] = "https://rr4---sn-5hne6nsk.googlevideo.com/videoplayback?expire=1633591652&ei=4zBeYaTaO4OQhgaCsaDgDg&ip=2a02:4780:8:a::5&id=a2a0ea6533404d40&itag=18&source=blogger&mh=W2&mm=31&mn=sn-5hne6nsk&ms=au&mv=u&mvi=4&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2640.294&lmt=1423933412185168&mt=1633562232&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRgIhAI-Wo9CVPTi0XAPkid5oGLlFwT-BnM-40ud9CF8f8SCbAiEA2kjqxqbQud6MTdAjMAKXRjInZQQeSXG4qbwvRxc1DbU&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAPy0auXh0pagTBfnOdcIu1eIE4xC7KyfGgyKz9E-IrX0AiBGASFiu_nEHJkYGa0jOI4UpKsjckYj88WXY7uCOOB0MA";
link_list[25] = "https://rr1---sn-5hne6nzs.googlevideo.com/videoplayback?expire=1633591688&ei=CDFeYYnRA7Cihgb35aiQAg&ip=2a02:4780:8:a::5&id=9f589283e3299561&itag=18&source=blogger&mh=Rs&mm=31&mn=sn-5hne6nzs&ms=au&mv=u&mvi=1&pl=48&susc=bl&mime=video/mp4&vprv=1&dur=2619.094&lmt=1423933557753878&mt=1633562232&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRAIgUq3CGQJEzlP8OyVshaa38yPurZvDyOCeBTm5o6PLw2kCIE0FJIBAWRf5n_WjneWYLxmje40Si5GzBmRZ8Fv6mSTY&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAMEDVaN3uiOGrXZeiKvnBfTvOU96zo9Wqfqp6yew4eBQAiEAqndilki6x671mo1uCHa8PHV_YgfeyZYzcfIxvgtPp8g";
// link_list[26] = "";
// link_list[27] = "";
// link_list[28] = "";
// link_list[29] = "";
// link_list[30] = "";
// link_list[31] = "";
// link_list[32] = "";
// link_list[33] = "";
// link_list[34] = "";
/// - T3

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



function playVid(index) {
    console.log(link_list[index]);
    video_links.children[index].classList.add("currentvid");
    //video_title
    video_title.innerHTML = video_links.children[index].children[0].title;

    source[0].src = path + link_list[index];// + ".mp4";
    //source[1].src = path + link_list[index];// + ".webm";   
    currentVid = index;
    video.load();
    video.play();
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
validaOnline();