import React, { useState, useEffect }from "react";
import { useParams } from "react-router-dom";
import { FC } from "react";
import DB_DOAAlter from '../../../database_sets/DB_DOAAlter.json';
import DB_DOA1st from '../../../database_sets/DB_DOA1st.json';
import DB_DOAp from '../../../database_sets/DB_DOAp.json';
import DB_DOASD from '../../../database_sets/DB_DOASD.json';
import DB_EVP from '../../../database_sets/DB_EVP.json';
import DB_Isekai from '../../../database_sets/DB_Isekai.json';
import DB_KSP from '../../../database_sets/DB_KSP.json';
import DB_P22 from '../../../database_sets/DB_P22.json';
import DB_SP1 from '../../../database_sets/DB_SP1.json';
import ToggleSwitch from '../../../components/ToggleTextSwitch/ToggleTextSwitch';
import ElementBar from "../../../components/ElementBar/ElementBar";
import '../ChampionsPage/ChampionsPage.css';
// import { getSetData } from "../../services/gatcg-api";
// import { Card } from "../../models/card";


interface ChampsPageState {
    showing: boolean,
    // cards: Card[],
    cards: (any)[],
    imgSrc: string,
    lightboxDisplay: boolean,
    cardToShow: string,
}

const initState: ChampsPageState = {
    showing: false,
    cards: [],
    imgSrc: "",
    lightboxDisplay: false,
    cardToShow: "",
}

const ChampionsPage: FC = () => {
    const [champsState, setChampsState] = useState(initState);
    const { id } = useParams();

    const handleTextToggle = () => {    
        const showing = champsState.showing;
        setChampsState({ ...champsState, showing: !showing });
    };

    const showLightbox = (targetImage: string) => {
        setChampsState({ ...champsState, lightboxDisplay: true, cardToShow: targetImage });
    };
    
    const hideLightBox = () => {
        setChampsState({ ...champsState, lightboxDisplay: false });
    };

    useEffect(() => {
        if (id === "DOA-Alter") {
            const cardsList = DB_DOAAlter.filter((card: any) => card.types.includes('CHAMPION'));;
            setChampsState({ ...champsState, cards: cardsList, imgSrc: "DOAAlter_Images" });
        }
        if (id === "DOA1st") {
            const champsList = DB_DOA1st.filter((card: any) => card.types.includes('CHAMPION'));
            setChampsState({ ...champsState, cards: champsList, imgSrc: "DOA1st_Images"});
        }
        if (id === "DOAp") {
            const cardsList = DB_DOAp.filter((card: any) => card.types.includes('CHAMPION'));;
            setChampsState({ ...champsState, cards: cardsList, imgSrc: "DOAp_Images" });
        }
        if (id === "DOASD") {
            const cardsList = DB_DOASD.filter((card: any) => card.types.includes('CHAMPION'));;
            setChampsState({ ...champsState, cards: cardsList, imgSrc: "DOASD_Images" });
        }
        if (id === "EVP") {
            const cardsList = DB_EVP.filter((card: any) => card.types.includes('CHAMPION'));;
            setChampsState({ ...champsState, cards: cardsList, imgSrc: "EVP_Images" });
        }
        if (id === "GVC") {
            const cardsList = DB_Isekai.filter((card: any) => card.types.includes('CHAMPION'));;
            setChampsState({ ...champsState, cards: cardsList, imgSrc: "GVC_Images" });
        }
        if (id === "KSP") {
            const cardsList = DB_KSP.filter((card: any) => card.types.includes('CHAMPION'));;
            setChampsState({ ...champsState, cards: cardsList, imgSrc: "KSP_Images" });
        }
        if (id === "P22") {
            const cardsList = DB_P22.filter((card: any) => card.types.includes('CHAMPION'));;
            setChampsState({ ...champsState, cards: cardsList, imgSrc: "P22_Images"});
        }
        if (id === "SP1") {
            const cardsList = DB_SP1.filter((card: any) => card.types.includes('CHAMPION'));;
            setChampsState({ ...champsState, cards: cardsList, imgSrc: "SP1_Images"});
        }
        // const fixedID = id?.replace("-", " ");
        // getSetData(fixedID!!).then((cards) => {
        //     console.log(cards);
        //     const champsList = cards.filter((card: any) => card.types.includes('CHAMPION'));
        //     setChampsState({ ...champsState, cards: champsList });
        // })
    }, [])

    return <>
    <div>
        <ElementBar id={ id as string}/>
        <p className="toggleText">Toggle Text <ToggleSwitch name='Toggle Card Text' handleTextToggle={handleTextToggle}/></p> 
        <div className="flexCardImgs">
            {champsState.cards.length > 0 ?
                champsState.cards.map(card => (
                    <div className="text-row" key={card["name"].toString()}>                           
                        <p id={card["name"].toString()}><img className="cardImg" onClick={() => showLightbox(card.collector_number)} src={process.env.PUBLIC_URL + `/${champsState.imgSrc}/${parseInt(card.collector_number)}.jpg`} alt="" /></p>
                        <p style={{ display: (champsState.showing ? 'block' : 'none' ) }} id={card["collector_number"].toString()} className="centerText">{card.name}</p>
                        <br />
                    </div>
                ))
            : <p>No Cards!</p>}
        </div> 
        { champsState.lightboxDisplay ? 
        <div id="lightbox">
            <img id="lightbox-img" onClick={() => hideLightBox()}src={process.env.PUBLIC_URL + `/${champsState.imgSrc}/${champsState.cardToShow}.jpg`}/>
        </div> : '' }
    </div>
    </>;
} 

export default ChampionsPage;