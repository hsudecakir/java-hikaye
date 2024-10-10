let castleorcave = prompt('Uzak diyarlarda bir yolculuktasın ve önünde iki devasa yapı var: Biri gökyüzüne uzanan bir kule, diğeri yerin derinliklerine inen bir mağara. Hangisini keşfetmek istersin? Kule-1 Mağara-2');
let continueorgoback;
let upordarkdoor;
let touchorcontinue;
let knowledgeorimmortality;
let lookorcontinue;
let fightorrun;
let boatorgoback;
let lightordark;
let drinkornot;
let discoverorgoback;
let thinkorcontinue;
let woodsormountains;
if(castleorcave === '1') {
  continueorgoback = prompt('Kuleye yaklaştığında eski bir muhafız seni durduruyor. “Bu kulede güç bulacaksın, ama bir bedeli olacak,” diyor. İlerlemeye devam mı edeceksin yoksa geri mi döneceksin? Devam et-1 Geri dön-2');

  if(continueorgoback === '1') {
    upordarkdoor = prompt('Kuleye girdiğinde karşına iki yol çıkar: Biri, dönen merdivenlerle yukarı çıkan bir yol, diğeri karanlık bir kapıdan geçiyor. Hangisini seçersin? Yukarı-1 Karanlık kapı-2');

    if(upordarkdoor === '1') {
      touchorcontinue = prompt('Merdivenlerin sonunda, devasa bir salonda parıldayan sihirli bir küre buluyorsun. Küreye dokunmak mı yoksa onu incelemeden yoluna devam etmek mi istersin? Dokun-1 Devam et-2');
      
      if(touchorcontinue === '1') {
        knowledgeorimmortality = prompt('Küreye dokunduğunda büyü seni içine çeker ve başka bir dünyaya götürür. Burada karşına yaşlı bir büyücü çıkar. Büyücü sana iki seçenek sunar: Sonsuz bilgi mi yoksa ölümsüzlük mü istersin? Bilgi-1 Ölümsüzlük-2');

        if(knowledgeorimmortality === '1') {
          console.log('Sonsuz bilgiye sahip olursun, ama bu bilginin ağırlığı ruhunu yıpratmaya başlar. Artık hiçbir şey seni şaşırtmaz, dünya üzerindeki her sırrı bilirsin. Bu durum seni yalnızlığa sürükler ve yavaşça bir gölgeye dönüşürsün. (Sonuç: Sınırsız bilgi, ama yalnızlık içinde bir varlık.)');
        } else if(knowledgeorimmortality === '2') {
          console.log('Ölümsüz olursun, ama zamanla herkesin senden uzaklaştığını fark edersin. Dünyayı sonsuza kadar izlemek zorundasın, ama sevdiğin her şey yok olur. (Sonuç: Sonsuz yaşam, ama yalnız bir varlık olarak kalırsın.)');
        } else {
          console.log('İki seçenekten birini seçip numarasını yazınız.');
        }

      } else if(touchorcontinue === '2') {
        lookorcontinue = prompt('Küreyi bırakıp yürümeye devam edersin ve kendini büyük bir aynanın önünde bulursun. Ayna, en derin arzularını yansıtır. Aynaya bakmak mı yoksa gözlerini kapatıp yoluna devam etmek mi istersin? Bak-1 Devam Et-2');
        if(lookorcontinue === '1') {
          console.log('Aynada en derin arzun olan şeyin, sonsuz bir krallık yönetmek olduğunu görürsün. Ayna, bu dileğini gerçekleştirir. Krallıklar sana boyun eğer, ama bir süre sonra gücün seni tüketmeye başlar. (Sonuç: Sonsuz güç, ama gücün altında ezilen bir hükümdar.)');
        } else if(touchorcontinue === '2') {
          console.log('Aynaya bakmamayı seçersin ve ilerledikçe yol seni kulenin en tepesine götürür. Burada, gerçek özgürlüğün kapılarını açan bir anahtar bulursun. Bu anahtar seni tüm güçlerden arındırıp sade bir yaşama götürür. (Sonuç: Güçleri reddeden, ama huzurlu bir yaşam.)');
        }
      } else {
        console.log('İki seçenekten birini seçip numarasını yazınız.');
      }
      
    } else if(upordarkdoor === '2') {
      fightorrun = prompt('Kapının ardında karanlık bir geçit bulursun. Yolculuğun sonunda karşına büyük bir ejderha çıkar. Ejderhayla savaşacak mısın yoksa kaçacak mısın? Savaş-1 Kaç-2');

      if(fightorrun === '1'){
        console.log('Ejderhayı yenersin ve onun kalbinden çıkan saf sihirle dolu bir kristal bulursun. Bu kristal sana sınırsız güç verir, ancak zamanla seni tüketmeye başlar. (Sonuç: Sınırsız güç, ama yavaşça tüketilen bir ruh.)');
      } else if (fightorrun === '2') {
        console.log('Ejderhadan kaçarken gizemli bir figür seni durdurur ve "Gerçek gücü yalnızca kalbinde bulabilirsin," der. Kendi içindeki cesareti keşfedersin ve ejderhayla yeniden karşılaştığında onu gücünle değil, bilgelikle yenersin. (Sonuç: Bilgelikle kazanılan zafer ve ruhsal güç.)');
      } else {
        console.log('İki seçenekten birini seçip numarasını yazınız.');
      }
    } else {
      console.log('İki seçenekten birini seçip numarasını yazınız.');
    }

  } else if(continueorgoback === '2') {
    console.log('Kuledeki belirsizlik ve bedelin ağırlığı seni geri dönmeye zorladı. Bu kararla, gücün cazibesine kapılmadan güvenli bir şekilde ilerleyebileceğin başka bir yola dönmüş oluyorsun. Bazen en büyük cesaret, zorluklarla yüzleşmek değil, onları akıllıca değerlendirmek ve doğru zamanda geri dönmektir. Bu karar, senin bilgece bir seçim yaptığını gösterir.');
  }  else {
    console.log('İki seçenekten birini seçip numarasını yazınız.');
  }

} else if(castleorcave === '2') {
  boatorgoback = prompt('Mağaraya girdiğinde karanlık bir nehirle karşılaşırsın. Nehrin karşısına geçmek için bir kayık var. Kayığa binip nehrin karşısına geçer misin yoksa mağaradan geri mi dönersin? Kayık-1 Geri dön-2');

  if(boatorgoback === '1') {
    lightordark = prompt('Nehrin karşısına geçtiğinde karşına iki yol çıkar: Biri ışıkla aydınlanmış bir tünele, diğeri tamamen karanlığa giden bir geçide çıkar. Hangi yolu seçersin? Işık Tüneli-1 Karanlık Geçit-2');

    if(lightordark === '1'){
      drinkornot = prompt('Işık tüneli seni büyülü bir bahçeye çıkarır. Bahçenin ortasında parıldayan bir şelale var. Şelaleden içmek mi yoksa bahçede dolaşmak mı istersin? İç-1 Dolaş-2');

      if(drinkornot === '1'){
        console.log(' Şelalenin suyunu içtiğinde her şeyin sırrını öğrenirsin. Ancak, tüm bilgiyi öğrendikçe gerçek dünya sana anlamsız gelir. (Sonuç: Bilgelik ve ruhsal bir yalnızlık.)');
      } else if(drinkornot === '2'){
        console.log('Bahçede yürüdükçe huzur ve dinginlik hissedersin. Zamanla her şeyin ne kadar basit ve güzel olduğunu fark edersin. Burası, huzuru bulduğun yer olur. (Sonuç: Huzurlu ve sade bir yaşam.)');
      } else {
        console.log('İki seçenekten birini seçip numarasını yazınız.');
      }
    } else if(lightordark === '2'){
      discoverorgoback = prompt('Karanlık geçitte ilerlerken bir ses seni durdurur ve "Sadece kalbinde ışık varsa bu yolda yürüyebilirsin," der. Kendi içindeki ışığı keşfetmeye mi çalışacaksın yoksa geri mi döneceksin? Keşfet-1 Geri dön-2');

      if(discoverorgoback === '1'){
        console.log('İçindeki ışığı keşfettiğinde karanlık geçit aydınlanır ve karşına kaybolmuş bir şehir çıkar. Bu şehirde barışı getirir ve halkın lideri olursun. (Sonuç: Kendi ışığınla barış getiren bir lider.)');
      } else if(discoverorgoback === '2'){
        console.log('Karanlıktan korkup geri dönmek, seni başladığın noktaya geri getirir. Ama bir şeyler seni hep rahatsız eder; o geçitte seni bekleyen gerçeği asla öğrenemezsin. (Sonuç: Kaçırılmış bir fırsat ve merakla dolu bir yaşam.)');
      } else {
        console.log('İki seçenekten birini seçip numarasını yazınız.');
      }
    } else {
      console.log('İki seçenekten birini seçip numarasını yazınız.');
    }
  } else if(boatorgoback === '2'){
    thinkorcontinue = prompt('Mağaradan çıkıp geri döndüğünde, karşına bir taş anıt çıkar. Anıtta eski bir yazı var: "Gerçek cesaret, geri dönmekte de olabilir." Anıtın yanına oturup düşünmek mi yoksa yoluna devam etmek mi istersin? Düşün-1 Devam et-2');

    if(thinkorcontinue === '1'){
      console.log('Anıtın yanında oturup düşünürken içsel bir huzur bulursun. Gerçek cesaretin her zaman ileri gitmekte değil, bazen geri dönmekte olduğunu anlarsın. (Sonuç: İçsel bir aydınlanma ve dinginlik.)');
    } else if(thinkorcontinue === '2'){
      woodsormountains = prompt('Yoluna devam ettiğinde karşına bir yol ayrımı çıkar. Bir taraf, ormana geri dönmeyi, diğer taraf ise dağlara gitmeyi işaret eder. Hangi yolu seçersin? Orman-1 Dağlar-2');

      if(woodsormountains === '1'){
        console.log('Ormana geri döndüğünde, çıktığın bu yolculuğun seni değiştirdiğini fark edersin. Yine başladığın yere dönmüş olabilirsin ama artık bambaşka bir insansın. (Sonuç: Yolculuk seni olgunlaştırdı ve başladığın yere geri döndün)');
      } else if(woodsormountains === '2'){
        console.log('Dağlara doğru ilerlerken yeni maceraların seni beklediğini fark edersin. Her adımda önünde daha da büyüleyici manzaralar açılır ve zirveye doğru tırmanırken içindeki macera duygusu katlanarak büyür. (Sonuç: Yeni maceralara doğru yola çıktın, ufkunu genişlettin)');
      } else {
        console.log('İki seçenekten birini seçip numarasını yazınız.');
      }
    } else {
      console.log('İki seçenekten birini seçip numarasını yazınız.');
    }
  } else {
    console.log('İki seçenekten birini seçip numarasını yazınız.');
  }
} else {
  console.log('İki seçenekten birini seçip numarasını yazınız.');
}
