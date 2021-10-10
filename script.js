
var temporada_listLastIndex = new Array();
temporada_listLastIndex[0] = 12;  //temporada 1 tem 13 episodios
temporada_listLastIndex[1] = 34;  //temporada 2 tem 22 episodios
temporada_listLastIndex[2] = 47;  //temporada 3 tem 13 episodios

var link_list = new Array();
/// - T1
link_list[0] = "https://seriesgratis.site/print.php?cod=A1TJFnRahmT2p2QTdjTMJVT4okRuNkeOF0Xyd3UkZWdwokWNFGVwB3bo1Cdl5GTZZFemZ0V2YERsFXd2gkaUVUN4VlQnl2UKVDa09lWH9UTZlWcj1STDFHd1UEdy8lNol2cY1keBJXLG1WOixmc3JFdBRnVjp2bVJlezQXNz9GSDZjcsBTekVjd2QUQ";
link_list[1] = "https://seriesgratis.site/print.php?cod=QTtMVctUjNGBlZyAXRxYkalh2TmR0UyIVSExkTWN1XQdGeoRHd0tkMNdWWCl0M4Q3Zo92XMlGMmF3Vz82cW92V5EzQppFMNhHa1t0ZLFTUiJWc5hWMWNVdVhnZIVEaPBnajhTY4VDUQ9GUnVnMvJHdPp2dq10VjJleth2RKhXUGRHWwE0dkVjd2QUQ";
link_list[2] = "https://seriesgratis.site/print.php?cod=IXMadkYW1mZ2gXcsZ2aQ1EMtJ0ZphVSHRGavp2caNjVTdDcxgXU40USZZXaXJmVYRmatRHbPJjR4YXdQZnU0U3Zyg0RK5mcuhVQ3RzUux0ZtgFafNlQY5Ec1NkMIh2RQpGSo1UVxU0dN1mbtgTdQZ1VwF3cSJDZzEXazNmW2sWYUxER4YkekVjd2QUQ";
link_list[3] = "https://seriesgratis.site/print.php?cod=YXQ5gjeM9VLuRVcMZnNwVGM5d0M4ZnW5gHeZZjWtBnU4ZleJZVVzcmb202XH1ieVlXVYNlV4g2XGVEV1gGd3MjdwolV3o2MvREMtIGc5wENnNVQzJXQxcWVEVFSwQ1SPF0MUh2QxAVTMVGW2dnTtUDUIJDOVpVay1GTjdXRz0CV0dUQ5lmekVjd2QUQ";
link_list[4] = "https://seriesgratis.site/print.php?cod=oWazQ3dyc2Vyc3VZlVOilURQtkNShDW6NGZB1WVshDe21WczEDeoZ0NYJmdRVVRxUGOLlHenFjaSd3Y3RUUhl3bx5WTRBzdy00UoJjbx4EeiVHNWdEaaJGbJRVOsBDR3cDcNJmQCJHamp1c4QjSiR0SlxGTitmUCh2XKBTRiBDREJFZ1EDekVjd2QUQ";
link_list[5] = "https://seriesgratis.site/print.php?cod=QUzEWQYhHc4dEe40ydaRjMBNmUNx0c3kla4xWeDhVdB52aMlGOydWSNlkTQJUR1kUUiplehdHext2MzNjcydnVZ12dxVXVqVmYqdGMElkdBVHcOdGbFJ1NMR3VEZHb5MVQzY3avVETYFmQ6BVVjBXbKl1QStUUQR2dxV0SLhFNqZ3aVR1dkVjd2QUQ";
link_list[6] = "https://seriesgratis.site/print.php?cod=UnchJWb3RHUQFmZCZEM1UlTph1SFVWNOB3anxWYYhjUBNHTYNmcVNzXQp3X0cHNLB1Z31kS4d1N30EdE1SM610QO1UZxVTej52VUNXM3cWOto0MRhWdHdWcnlWeQ9kSIVzR2c3b15UQGtUO39kejRDaiZ1bERjdwRVWFJEcEdTMfxUSJJ1dkVjd2QUQ";
link_list[7] = "https://seriesgratis.site/print.php?cod=wbhdnesNEa0IDZPhWY0NUeuNXd65kZzEleLJkWsNTeXRFTuJVa5ZUNYZFSiVHRzMkTRdGZjRVVsZkNkljVwRWMYNHcHV2Yx8keztGUBF0R3dXQO1WU1JEdYhkVEdUSwUnWnhFMslXN480UuFXTC1kTwQlTyc1XZdmanFVMvFHcyEGWJtkekVjd2QUQ";
link_list[8] = "https://seriesgratis.site/print.php?cod=wdJl3UyYnYMREVT1SNWVmbrhEUl12XEVWROtGVXh0Z6N1ML9WcQVkaSdGT3kGW5g2SRNESOZUOIBzX3Z0Mnhler1iSrd2T2J0a5BjTtUzMtImW3lWWTlnShlWVl12X3hkRw9mU2tmVfBHOKxWLWJHTFVGWnN0ZWNXewYHdSFXbNNUM6RmekVjd2QUQ";
link_list[9] = "https://seriesgratis.site/print.php?cod=waul1QLhFOZJUL3U3d5ZlRp5UVCtGVzB1cidlZR92NxBTOp9UbJZlZ2okeqJkZXd0dOtGe3VXcyl2brBXb4lkb4gVOCF0NzhHMzgDTNVlaGR3b3RWQzEFNycXRLJTUp91SnJFexN3Q4M2YaR1bIpnVkpUYRxGZjNEZiBncTRTN1Y1SwVTekVjd2QUQ";
link_list[10] = "https://seriesgratis.site/print.php?cod=0kZ5ElRKNzZQZXRIFUV39lcxUUWTJXYfNkWhtWQTh1bphUUZR3QQdFe0Ykb3xUWQtGVL9UL2p2VEpUZ10GV50GaykUSLN3bz80MwlGStczVYpWSkBTcLVzUZpWeRJWOk92Q6ZHOnJ2SCVzSip0a5RURt1iaWN2VmBDTtIzN1hGZBx0SOpmekVjd2QUQ";
link_list[11] = "https://seriesgratis.site/print.php?cod=cnaKRkSVZkT25GdJ5Ua0Q0STt2YX50ak1GNTB1MitWOxp3R2RGVtx2RWNXROhlSIBTNmpWUvpXOEJDNzAXMjRURFJ2aHFFZUpVbZl0VFFkZXVmU4gkZ49kd050ahxGSHlzTUZDWENUeEF0ME1EejBTSGZ0R3EjewkTN4Rla3g2ZPJ1S5RjekVjd2QUQ";
link_list[12] = "https://seriesgratis.site/print.php?cod=cGOnJ1N3d1NyBlRspETwdESnBzSOhDa690YvJEZ2FVTOREc4RFUzEDb6NUNn5Udll0T5gGWBR1Y0EVVkxWR21iZj5kMJF3RaRFRlNGdtwke5cnQfRGcrNFTDRkaqRVL0lWdpBXOfp0cCpHTZp3ZaxmRrZXbR5WLFF1aaFEWytkcSFDeRZ1dkVjd2QUQ";
/// - T2
link_list[13] = "https://seriesgratis.site/print.php?cod=U1bRlWTJZHUp92c4kUNCljaVhjRDlTMItGcQdWVKRWT3lGewEFWEtUbrZFUmFTM0RnMWRHd1lUL51mQ4UXM65maE91UtIDS1IlYh5kSIdFWqp2MRpVcVh1XXlUMvZVWYVEeKRTTxcTbtYXLwZnYGJ2SzZFViZ3dXtUbqdjdOxkbrRHMkpXekVjd2QUQ";
link_list[14] = "https://seriesgratis.site/print.php?cod=AXRyVDSUJjSCJESUpWdtETd1RHVpFzdKRDdtIXW20yYXdXOaVWcLx0Q1ETN1gkQRhTbGZDa580NQVHeJJlWI5UOxNWMRVXZtYXU182NWpXT6NkeEp2V4cGTFZTe1IkZ0cmVKF1ZndGdxZGe4wGeZpXapVlU2VEVFFlVjJjQ5JGVVR1TXhmekVjd2QUQ";
link_list[15] = "https://seriesgratis.site/print.php?cod=wYUZ3MWlVcuZ3Ms1kYs1Gb2EmdBBTLIhDOOVmZCJWM4o3bFdVUIZzbSVmbuxUTIVTO65UeKRnRzk1VtBFWyAVVpZ2ZxV3XPlXUZV3VTNlYMt0ZjN2aFZUZtlULqV0a3cHRSdDNtN2RHNTc3cjNu1CVNpHTqZkWIdUNygkQ55EUKVWdjBFekVjd2QUQ";
link_list[16] = "https://seriesgratis.site/print.php?cod=IHNQdUY3gDM3kFNTFmdPR1RmlHOXFWctZzb2dHTPlDbtYTYUp2X1ZGWMFDZ4p1XQZ2YkVEaYFEZzAXa5NzYRVUU4I0Tu52ZOhnSvtWTpN0SOhHVDd1UD1GRKl0RqZVSBFEeOd1czZEV3Vmbrhma08WYKlnSqhjZ4hUWyE3Uzw0VxgFdiRHekVjd2QUQ";
link_list[17] = "https://seriesgratis.site/print.php?cod=glZil3SMJmYxNTL6F0X04UV0AjdiZUeiJFZ19GRTdDdNJUQhF3SrZXQJFVQmFERohUbklWbrdFStUkQFZlU08VStNUdkZmN5lXcBplQRFDbMJlbFhkbNNHdycEbtAlZRdjWlRUNlZ2MIR2SOVlaRpFZnpFbqZ0bwhHcnVkQfFTVvFld2AVekVjd2QUQ";
link_list[18] = "https://seriesgratis.site/print.php?cod=0CR5NDNSxWW5h3ZpBTdPVzTxRVaZx0YppGd3M3SshDSLt2d5FjYJpndGxEeHdjQldWY2hjYHNTZ3VzSx5kRsJlWu91MQVDSvl2cqdFaaJmMPlFMmRXV0FUU4ElNs1SNf5mVRlmZ2MFcK1GW1M1ctlmewJXNYlXSFdDZPJEe1YHWhR1TGVEekVjd2QUQ";
link_list[19] = "https://seriesgratis.site/print.php?cod=MUU0I2NLJHd3sWaCVTUMJzS2o1NyZTeOBnWiNWOCRjdtFGTwYGcIxkap9lSJhzZxlFOFJmYLVWRpllRyw2YYlzaFJ3RwFXRm9VS59lN5s2SuFncvllVXFkZjh0ZEtURHlnWTh2T1cFV1RXNwFFN61WZwdWVfFXbxAVYxd2Tk9mdDJ0Q5M3dkVjd2QUQ";
link_list[20] = "https://seriesgratis.site/print.php?cod=QRtQHdRh1MPJnQKBlSYBzTGBXTL1WaYB3VwlGNDhXQzpnR4tGbsJWRtYXSu1CTOlmek1SL4p2dE92YSNVa4YnYPh2Mj92N1AFUNBTO0hjRNlWYHZkW5Q1ZSFWOBZHSDhWT5YmTWhTOPFUcvNGVTVXZiNmR1QHUw9ERoNFbHNzaS1WN3ZlekVjd2QUQ";
link_list[21] = "https://seriesgratis.site/print.php?cod=EETKN3dZVGRzYjRmBTRBllQEZ0Uth1br50dMlWWDZTTHJTathHZIZWeDVWdGJHO4oHModHNrF0QyoEcT5GNtMzSV9GVzlmdrhkULpXULJleqZTWZdjSD9VcLtEOMB3NyoVOwJzUEpkM0cWTxhnYjp0SyNXWMpXUVtGe5M2YFFTU0kWOa50dkVjd2QUQ";
link_list[22] = "https://seriesgratis.site/print.php?cod=g3MYJ1SRN2a1UGZt9kSyY1cfFDU2BXLS9WTi5mc5MVVm9EbD52bl9kZLBXc2JFcjVmNr91U0QlR3pWLJ1WStV3Syp3X5lDWGdkWzkVMSR1YnZUMOhzXa9GOq5WaDdVOxpkQvlnN5ImY5lTOFpGRwQWZlJ1XFVldzVUTWFzSrRXYVJ3bSBXekVjd2QUQ";
link_list[23] = "https://seriesgratis.site/print.php?cod=QUtsUeJBnZrR2X0QTdNxUetcWSQdGTNR1c3MlYqdETxElU28FdUBjN3hULIJXb3ZjYUJzXuB1NyF3SkN0a3lUNyh0c2NEOUFXV1UjNsZjTpZ2ZXpnRtgXR1c1QVZUaiNzbmdlYIplUxRkcZtUVptEWOREdmFUb3pXcORlRflTWtkFe1h3dkVjd2QUQ";
link_list[24] = "https://seriesgratis.site/print.php?cod=QRvJWNzBXVIt0RxIzXHhTT3kUL0EnctdUWq1EbDh0d0k3bXVXUWlkYKhVRC91ZINmbsxWOElXMul3QUFFMz8kSvNTcPJjaCR1ZtBXVPZjawp1ayhzNM1yTi9EOthEc2ElR3cWTQhVOJNEVP1ie3RXaLpFW0lVOXVnNwYnWGpkcltUZYhVekVjd2QUQ";
link_list[25] = "https://seriesgratis.site/print.php?cod=wY2lUULZXbM5kUyEjYnhTeRJlbN1WQupWWEF3bG1WaSpUWRBlckFFVClEUBdmUQpGZHtmeKJjWaJjNVF3S0FTTalFWUlDaSB1Yf92bDNWLnZFai1kTMlVZJ92aVtGeygWaFN0RsdWanNlUR1GR4AXW5gzSOR0ZQBVVvBXUn1UbNNjVChUekVjd2QUQ";
link_list[26] = "https://seriesgratis.site/print.php?cod=nRWLlxmRjx2RWd2N2B1cwFDVjN0dIdnNJVVVwEHZj9EbZZzUXZFU0VVOZlnRzYUYGZHWl9leH1CNlpnUGBVMOxEeykjT2YDdtITVu1mMahGNJVWVThFSDlWV5okZtRFbwNVW3oFS3J2XihjVsRWOHpUVqlDbQBne6FnS2FzNERTRrNGekVjd2QUQ";
link_list[27] = "https://seriesgratis.site/print.php?cod=QWNplNoJmRNZnVsZmSFl1R1h3VtEjbGl3XXRGOWdjRMRHTt8UbVVUL5I1XGRTV4RmWytUZ0l1V0FDdmZmT0MWRLZkeZBlbxx2X4J3UUdkTqVjZ4RnTmZ2ajFlcwkEMSV0S0B1TlJmR5k1MoN1VNdHMHt2QsFncpNEV6ZVVEdEcs9WO3YmekVjd2QUQ";
link_list[28] = "https://seriesgratis.site/print.php?cod=QW0pleWNmTWZjWKFVMQ1CUx0kdyE3XP1kT5FUUJ10YLhENJRlS4QDehFWaJdETxNETOR1VLxWeyIUYoNXSpRXWUBHawAHa30EWLt0MpdWYm9UZHlkYoNzNkl1R4pHaYp3ZRdDNykEUVhTLIpUQ19GcyF1ZtpXcNdEMXlldoNTZ2d0Yp50dkVjd2QUQ";
link_list[29] = "https://seriesgratis.site/print.php?cod=AModjTfV0dkh1a0QnaPJ3V1l2VrJETTp0bw9Ed6xGMCV0Y4EnNodTaIt0MQR1XR1ybxw2QrR1cqVVQz80Z1gTRINGdzUzYotmQElkWuBTWxomQxNXLfNFTYhWLt8EUGNmb0klRaVzdw9FemdkbkdXd1YUcrdUSk9kdMdUNWtWW4FHTvlmekVjd2QUQ";
link_list[30] = "https://seriesgratis.site/print.php?cod=QRXFjT5EVUwgmMfZWQxQlaVdEUINmMq9GOLpXLh1CcjJWa6JDZL91UOlkUxY3UwNjcvRGM6dkSEZHUzlVcu9VO30GM0pFbsp3bBp3S5R3ZBNlTRlWN0MWWmJlMlhTcKh0Ri1iTQ9mR0YTZtVWOohWSw0CSZRHMsVnVt1UW1RWd1EVYKhHekVjd2QUQ";
link_list[31] = "https://seriesgratis.site/print.php?cod=Y2Vy9EVCRmWTNncFlGZ2dneodXaEpXZ2kkQGRDMUJkaklFR5IkZDJ0SQZ0ZRRWRtskWzQ2Xfhjd4IXW1E2VpZEMytmM2QFRzo3cGVjarNjY6xWOxITQ6x2Z5QVevdWUVd2SDhGWXtWVaZTWK90dqFEWPZTMzkHVaBFdTVTahZkcx5UU49WekVjd2QUQ";
link_list[32] = "https://seriesgratis.site/print.php?cod=gVMSFjT1NzcHJUNSFHVGhUdJ1iQZZHOWRGVPpmSQllWyNVdEN3V10STDF3XLF3MxNGSwVnezlTRnpGbjJ2VKdXQHdnVYJHUJhnROVDeLN3ZwJDazNVZzNUTL9EMn9lNLhFWMtWeHVGMORzZXRTVBlzRTlkeRZGeSZVLkVjYsh0Uy5kYOJmekVjd2QUQ";
link_list[33] = "https://seriesgratis.site/print.php?cod=QR0hkWq5Gcjl3by4GdGp3a1RUaINzciVDbPZGTKF2daFGdpZnRvFWRPNHNtRjRZ90RtlWQ2hURXJHVPNHchJWMlF2TLJXY6FVY0IjeZNWM1JWQThXa150QBhGeLh0d1ZlUrhTUjVWVNR1Z2tUOo9mbyhVL250SWl1UpxmRZBjRNJVe5pXekVjd2QUQ";
link_list[34] = "https://seriesgratis.site/print.php?cod=Y1btMGMyYzV1dEO2FXa30Sez0WM4UDZ4NWOy1ycDlkRpRnNXp2YmZkR5IDSqt0U0o2XlNkMtlWMYVGT4UVSGBlQulWToJDUR1iNZJESYhDekZzXpRDZ5BHVTNENmV3M5sEWn9mTSp0djFVL5NURyUDT10ie4QHM0gzYCdHORhldGhHUDl0dkVjd2QUQ";
/// - T3
link_list[35] = "https://seriesgratis.site/print.php?cod=ETL0VnRCRXd1ZTSpNjd2U1cFpWR2UkeH9GW5RXZ1lFa1k0ZaRjUsZmer1WWplzdpxWTSNkMrJDRQRXTyNjZZVTLSh0UTZDZypFNzkXSyo3S0F3Sf1CRihEMsV0a4B3VtgEcKxEZvFjN2AXLfFWOCNkQmd0aMdkW3wUWQd3SahzUUZWViJVekVjd2QUQ";
link_list[36] = "https://seriesgratis.site/print.php?cod=AHNqZzTwx0YZBzUvZnTxpGc6FjYLN1Xn50TEFHRJtGcBRjUqp0UGZGTkVHcQdGOLR0RCNkc4NWU0YnZzdTSJl1XoJkMXBXQTZmVEp1b1dmeIFmeuFEOhhGOmdkbDZUO4RVWsRje3RWZmVFcD9maFdleJNDNVVlRn1ySKJHOws0N4IWNuNDekVjd2QUQ";
link_list[37] = "https://seriesgratis.site/print.php?cod=UXT2c1ZTNWTMZmephmcy50XHNTVxBjW4gGb4hVbk10YB52YfdHcphFe3E3ZzVUN3s0ZqR3ZzQjRPhDOnR2ZyJlTLdFdXNzTWVUUyklR3dUWOd3U5IHOlZzbTZVRtRXbZl2bVdHdkp2Y2hkYyYnUVJWW3sGR5kHWWVkdkRlbsVUb5cjMtIjekVjd2QUQ";
link_list[38] = "https://seriesgratis.site/print.php?cod=wbyB1NtMmaClkT0Z3NOxEM6ZUShVXVvpHbtIkNIVmVilmdkZza6h3X6Vzc2cDVp9UbHhlVTV3R1dnMz82ZaVzbNh2XtkkYnxmRykkQ30mZptER5c3XHFjNvV2QGFXTYhWVQ1GO4pFbyhlQ0JjZmNDO6BVLKVlaflFUWpWUyM1XXRUevhVekVjd2QUQ";
link_list[39] = "https://seriesgratis.site/print.php?cod=A1ZU91MklFV2RmZtFmYwdTWwl3a6F3VUhjUQFVc6FDU1QmbzNncV1kYTN1dDBXTk9WQWJHWNhGOSdnS0RFexAHWIRmeLZVT5p0cnJGej1ma6hmSPNlTsBletRnTqR0XWhVealFaHJXY3gTaRpkS1k3TfhjdHFjdfRHRsJkTwgWe29VNfZHekVjd2QUQ";
link_list[40] = "https://seriesgratis.site/print.php?cod=EGUFRkUFxUUOlUbaZmWCJmU2QVOOpGSWZ1ajx0V5QmZzADbzIkSUpEUXFEaOBlNnh2YLhGc4AFauNFV4N1b1dkMvVkYKd1SiVXe65GS542S28Fb5YVLstGNycDa4p2TFZmSkdzVjRzXIlmd4Z0YjNnba9VUMtGW4Zkd44GWSF3RjZHRiBjekVjd2QUQ";
link_list[41] = "https://seriesgratis.site/print.php?cod=AlbylnQrVURn1SdYlkTyYHawIENxtmMxgGUmZncKNWNPdHTx8WSHV2Zx0WSzk1VshHNRlFM2oUc342NwYGSslUTpBXdKtkaZN3X3Y3VJtWc4NGMDZzc4AVUTdFOxBHTyJnRXJEN4gzd1hENkp1dq9lbYd1NjJ1QyllMYVzR0RlcxlGNiNDekVjd2QUQ";
link_list[42] = "https://seriesgratis.site/print.php?cod=4ma4UUZylFNRlXeGFXZwFEe4oVWZZnWmNkU2oEetE0YMN2YWhWLjZ1TsdjeT1ybaZGcahERBdmSIV1RMNkdD1UYzhVdKh3Vy0icxRjWpZkbxInR3oUWY1SNjFXRH5GT2IXVupkUtNDbqB3VEBHVXp0aLhVSsllcUhVVy80Y1RzXwN3Q1pXekVjd2QUQ";
link_list[43] = "https://seriesgratis.site/print.php?cod=wZkZWMqdHVQlUaVpUOkdEWUh1RspHSIZHdaZlSNN3NzIGafxmc6BFcYd3N4AjRUxUTxxmNyonSXNzXlFXUDJXaycXetVVekNzd3EjSY10XOpmbMt2UsdjSahDM4lmUntkeOh2b2dWcohzduhUOVdzdEF1V58WLfZjQwIFRDBTQfdjVldGekVjd2QUQ";
link_list[44] = "https://seriesgratis.site/print.php?cod=oVZzUzT0RHRYh2UtkHTwJnWD10bpZDbRRGMsVncqhFV0kGUEZHcU92QoFTcGxkRsNVRsB1QH10YOVzTxhFdJ1SOZFUL4Q3U4k3QkFFZ2NVcOhTOrRjeWNGU4Aja542UJ5maWljdsZFRilTVsFTSmhXaF5kU410U0QVdN9VTBN1V1dWVzl0dkVjd2QUQ";
link_list[45] = "https://seriesgratis.site/print.php?cod=MDMplXSfBnNNRUZIdHSiJUc3Zkcax0c1kWWZpHakFlRHRVR2RncVpGcyJTV3ZGVHdXdr5mRnJmNZRVaqhzTyFHcvlDOz4WQoNUa1ZGR2hWcUp2Zw5WMzNTcHlmdxd1QBlTL2M3btVTW0UUbfFVUwUzYWFWN5MTYONUdvZFR19WUZxUe3Y1dkVjd2QUQ";
link_list[46] = "https://seriesgratis.site/print.php?cod=wdYRmNtomM3NFMn5UbLJVYtgDeJRmZ1MlS6hWOVFDTf50ZZVXWtxWbkFzYXpVR0lTOHZTNuNWU2ZURppEbxk2NzpGTwY3U2Z1N2cUUUpFZmNUa3gXUqJlYxlTR4lnU1UDSuFEa6BDVyA3Zst0ZzNlYHB1SB1iRmFXMk5EbEh2aXRmZBRGekVjd2QUQ";
link_list[47] = "https://seriesgratis.site/print.php?cod=QNulXe2ZkVIVTN1kmZjpmVyI2dlp3auZFRwsWZJFjM61WY14UO0IzSYRXSqJmduhleJNXThlmaGpkbRNVdxhVW1MXNuhlbZFWcmp0c4wkW5EnYlVlSNxWZuVna5ZEd5oET4kTVWZ0aJJ2YJF2YiVldipFbxkVQVhXVa9VblRWNsdWekVjd2QUQ";

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