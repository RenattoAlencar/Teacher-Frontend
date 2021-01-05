import React from 'react'

import logoImg from '../../essets/images/logo.svg'
import landingImg from '../../essets/images/landing.svg'


import studyIcon from '../../essets/images/icons/study.svg'
import giveClassesIcon from '../../essets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../essets/images/icons/purple-heart.svg'

import './styles.css'


function Landing(){
    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Teacher"/>
                    <h2>Sua plataorma de estudos online</h2>
                </div>

                <img 
                src={landingImg} 
                alt="Plataforma de Estudos" 
                className="hero-image"
                />
                <div className="buttons-container">
                    <a href="" className="study" >
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </a>

                    <a href="" className="give-classes" >
                        <img src={giveClassesIcon} alt="Dar aulas"/>
                        Dar aulas
                    </a>
                </div>
                <span className="total-connections">
                    Total de 200 conexoes ja realizadas 
                    <img src={purpleHeartIcon} alt="Coração Roxo"/>
                </span>
            </div>

        </div>
    )
}

export default Landing