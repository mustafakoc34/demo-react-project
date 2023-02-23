import React, { useState } from 'react'

function Card({ card, deleteCard}) {

    const [yapilacak,setYapilacak] = useState("");
    const [comment, setComment] = useState([]);
    console.log(comment)

    const ekle =()=>{
        setComment([...comment,
            {
                id:comment.length,
                comment:yapilacak
            }
        ]);
        setYapilacak("");
    }

    return (
        <>
            <div className="card mb-3" style={{ maxWidth: "540px" }} >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img style={{ height: "300px" }} src={card.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Kitap: {card.name}</h5>
                            <h5 className="card-text">Yazar: {card.username}</h5>
                            {/* <p className="card-text">Address: {card["address"]["city"]}</p> */}
                            {/* <p className="card-text"><small className="text-muted">Mobil: {card.phone}</small></p> */}
                            <button onClick={() => deleteCard(card.id)} className="btn btn-outline-danger" type="submit" >Sil</button>
                            <button className="btn btn-outline-success ms-3" type="button" data-bs-toggle="collapse" data-bs-target={"#".concat("edit" + card.id)} aria-expanded="false" aria-controls={"edit" + card.id}>
                                Yorum Ekle
                            </button>
                            <div className="collapse mt-2" id={"edit" + card.id}>
                                <div className="input-group mb-3">
                                    <input onChange={(e) => setYapilacak(e.target.value)} value={yapilacak} type="text" className="form-control" placeholder="Yorumunuzu ekleyin" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button onClick={ekle} className="btn btn-outline-success" type="button" id="button-addon2">Ekle</button>
                                </div>
                            </div>
                            <h5 id={"h5" + card.id} className="card-text">Yorumlar: {comment.map(x =><li style={{listStyleType:"number", marginLeft:"20px"}}>{x.comment}</li>)}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card