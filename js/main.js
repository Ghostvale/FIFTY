
			var hiragana = ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "を", "ん"],
				katakana = ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ", "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ワ", "ヲ", "ン"],
				romaji = ['a','i','u','e','o','ka','ki','ku','ke','ko','sa','shi','su','se','so','ta','chi','tsu','te','to','na','ni','nu','ne','no','ha','hi','fu','he','ho','ma','mi','mu','me','mo','ya','yu','yo','ra','ri','ru','re','ro','wa','o','n'],
				cHiragana=document.getElementsByClassName("Hiragana")[0],
				cKatakana=document.getElementsByClassName("Katakana")[0],
				cRomaji=document.getElementsByClassName("Romaji")[0],
				cvoice=document.getElementsByClassName("voice")[0],
				cnext_button=document.getElementsByClassName("next_button")[0],
				cbut_h=document.getElementsByClassName("but_h")[0],
				cbut_k=document.getElementsByClassName("but_k")[0],
				cbut_r=document.getElementsByClassName("but_r")[0];
				
				var cvoice ="www.bing.com/translator/api/language/Speak?locale=ja-JP&gender=female&media=audio/mp3&text=" ;
				var selectnumber = 0;
				var index = 0;
				function hideDecision(number){
					switch(number){
					    case 0 :
					    this.cHiragana.classList.remove("hide");
					    if(!cKatakana.classList.contains("hide")){
						    this.cKatakana.classList.add("hide");
					    }
					    if(!cRomaji.classList.contains("hide")){
						    this.cRomaji.classList.add("hide");
					    }
					    break;
					    case 1:
					    this.cKatakana.classList.remove("hide");
					    if(!cRomaji.classList.contains("hide")){
						    this.cRomaji.classList.add("hide");
					    }
					    if(!cHiragana.classList.contains("hide")){
						    this.cHiragana.classList.add("hide");
					    }
					    break;
					    case 2:
					    this.cRomaji.classList.remove("hide");
					    if(!cHiragana.classList.contains("hide")){
						    this.cHiragana.classList.add("hide");
					    }
					    if(!cKatakana.classList.contains("hide")){
						    this.cKatakana.classList.add("hide");
					    }
					    break;
				    }
				}
				function shadowDecision(number){
					switch(number){
						case 0:
						this.cbut_h.classList.remove("shadow");
						if(!cbut_k.classList.contains("shadow")){
							this.cbut_k.classList.add("shadow");
						}
						if(!cbut_r.classList.contains("shadow")){
							this.cbut_r.classList.add("shadow");
						}
						break;
						case 1:
						this.cbut_k.classList.remove("shadow");
						if(!cbut_h.classList.contains("shadow")){
							this.cbut_h.classList.add("shadow");
						}
						if(!cbut_r.classList.contains("shadow")){
							this.cbut_r.classList.add("shadow");
						}
						break;
						case 2:
						this.cbut_r.classList.remove("shadow");
						if(!cbut_h.classList.contains("shadow")){
							this.cbut_h.classList.add("shadow");
						}
						if(!cbut_k.classList.contains("shadow")){
							this.cbut_k.classList.add("shadow");
						}
						break;
						
					}
				}
				function displayMain(){
					this.index = Math.floor(Math.random() * this.hiragana.length);
					this.selectnumber = Math.floor(Math.random()*3);
					this.cHiragana.innerHTML = this.hiragana[index];
				    this.cKatakana.innerHTML = this.katakana[index];
				    this.cRomaji.innerHTML = this.romaji[index];
				    hideDecision(selectnumber);
				    shadowDecision(selectnumber);
				}
				
				function h_button(){
					this.selectnumber = 0;
					shadowDecision(selectnumber);
					hideDecision(selectnumber);
				}
				function k_button(){
					this.selectnumber = 1;
					shadowDecision(selectnumber);
					hideDecision(selectnumber);
				}
				function r_button(){
					this.selectnumber = 2;
					shadowDecision(selectnumber);
					hideDecision(selectnumber);
				}
				function voice_button(){
					var audio = document.createElement("audio");
					audio.src = "https://m.hujiang.com/zt/jp/50yin/audio/" + hiragana[index] + ".mp3";
					audio.play();
					
				}
				displayMain();
				
				   
	
