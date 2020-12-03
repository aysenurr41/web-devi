const anaSayfa = function(req, res, next) {
  res.render('mekanlar-liste',
    { title : 'Anasayfa',
      'footer' : 'Ayşenur Demir',
      'sayfaBaslik' : {
        'siteAd' : 'Mekan 32',
        'aciklama' : 'Isparta civarındaki mekanları keşfedin!'
      },
      'mekanlar' : [
        {
          'ad' : 'Starbucks',
          'adres' : 'Centrum Garden',
          'puan' : '4',
          'imkanlar' : ['Kahve', 'Çay', 'Pasta'],
          'mesafe' : '10km'
        },
        {
          'ad' : 'Gloria Jeans',
          'adres' : 'Iyaş Avm',
          'puan' : '3',
          'imkanlar' : ['Kahve', 'Kek', 'Çay'],
          'mesafe' : '5km'
        },
        {
          'ad' : 'Türk Kahvesi',
          'adres' : 'Iyaş Avm',
          'puan' : '3',
          'imkanlar' : ['Kahve', 'Kek', 'Pasta'],
          'mesafe' : '5km'
        },
        {
          'ad' : 'MackBear',
          'adres' : 'Iyaş',
          'puan' : '4',
          'imkanlar' : ['Kahve Çeşitleri', 'Kek', 'Pasta'],
          'mesafe' : '6km'
        },
        {
          'ad' : 'Mc Donalds',
          'adres' : 'Çarşı',
          'puan' : '5',
          'imkanlar' : ['Burger', 'Kahve'],
          'mesafe' : '7km'
        }
      ]
    }
   );
}

const mekanBilgisi = function(req, res, next) {
  res.render('mekan-detay', 
    { title : 'Mekan Bilgisi',
      'sayfaBaslik' : 'Starbucks',
      'footer' : 'Ayşenur Demir',
      'mekanBilgisi' : {
        'ad' : 'Starbucks',
        'adres' : 'Centrum Garden',
        'puan' : 3,
        'imkanlar' : ['Kahve', 'Çay', 'Pasta'],
        'koordinatlar' : {
          'enlem': '37.781885',
          'boylam' : '30.566034'
        },
        'saatler' : [
          {
            'gunler' : 'Pazartesi - Cuma',
            'acilis' : '7:00',
            'kapanis' : '23:00',
            'kapali' : false
          },
          {
            'gunler' : 'Cumartesi',
            'acilis' : '9:00',
            'kapanis' : '22:00',
            'kapali' : false
          },
          {
            'gunler' : 'Pazar',
            'kapali' : true
          }
        ],
        'yorumlar' : [
          {
            'yorumYapan' : 'Ayşenur Demir',
            'puan' : '4',
            'tarih' : '26.11.2020',
            'yorumMetni' : 'Çok temiz.'
          },
          {
            'yorumYapan' : 'Asım Sinan Yüksel',
            'puan' : '4',
            'tarih' : '30.11.2020',
            'yorumMetni' : 'Kahveleri güzel.'
          }
        ]
      }
    }
  );
}

const yorumEkle = function(req, res, next) {
  res.render('yorum-ekle', 
    { 
      title : 'Yorum Ekle',
      'footer' : 'Ayşenur Demir'
    }
  );
}


module.exports = {
  anaSayfa,
  mekanBilgisi, 
  yorumEkle
}