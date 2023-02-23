import React, { useState } from 'react'
import Card from './Card'

function Cardlist() {

  const [cardInfo, setCardInfo] = useState(
    [
      {
        "id": 1,
        "name": "Akdeniz",
        "username": "Panait Istrati",
        "img": "https://cdn1.dokuzsoft.com/u/otuken/img/c/a/k/akdeniz-1539263586.jpg",
        "email": "",

        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",

      },
      {
        "id": 2,
        "name": "Memduh Şevket Esendal",
        "username": "Ayaşlı ile Kiracıları",
        "img": "https://i.dr.com.tr/cache/500x400-0/originals/0000000062977-1.jpg",
        "email": "",

        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",

      },
      {
        "id": 3,
        "name": "Babalar ve Oğullar",
        "username": "Turgenyev",
        "img": "https://i.dr.com.tr/cache/600x600-0/originals/0000000289443-1.jpg",
        "email": "",

        "phone": "1-463-123-4447",
        "website": "ramiro.info",

      },
      {
        "id": 4,
        "name": "Beyaz Diş",
        "username": "Jack London",
        "img": "https://i.dr.com.tr/cache/600x600-0/originals/0000000347422-1.jpg",
        "email": "",

        "phone": "493-170-9623 x156",
        "website": "kale.biz",

      },
      {
        "id": 5,
        "name": "Beyaz Gemi",
        "username": "Cengiz Aytmatov",
        "img": "https://i.dr.com.tr/cache/600x600-0/originals/0001692106001-1.jpg",
        "email": "",

        "phone": "(254)954-1289",
        "website": "demarco.info",

      },
      {
        "id": 6,
        "name": "Bir Bilim Adamının Romanı",
        "username": "Oğuz Atay",
        "img": "https://i.dr.com.tr/cache/600x600-0/originals/0000000061471-1.jpg",
        "email": "",

        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",

      },
      {
        "id": 7,
        "name": "Cemo",
        "username": "Kemal Bilbaşar",
        "img": "https://static.nadirkitap.com/fotograf/226982/7/Kitap_20160926005706_226982_10.jpg",
        "email": "",

        "phone": "210.067.6132",
        "website": "elvis.io",

      },
      {
        "id": 8,
        "name": "Sinek Isırıklarının Müellifi",
        "username": "Barış Bıçakçı",
        "img": "https://static.nadirkitap.com/fotograf/1269605/21/Kitap_2021022318574112696058.jpg",
        "email": "",

        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
      }
    ]
  )
  console.log(cardInfo)
  
  const deleteCard = (id) => {
    setCardInfo(cardInfo.filter(card => card.id !== id))
  }

  return (
    <>
      <div className='container'>
        <div className='row mt-5'>
          {cardInfo.map((card, i) => (
            <div className='col-md-6' key={i} id={"card" + card.id} >
              <Card card={card} deleteCard={deleteCard}/>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Cardlist