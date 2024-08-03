import * as React from "react";

function MyComponent() {
return (
  <>
    <div className="div">
      <div className="div-2">
        <div className="div-3">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/66c3b7a8c366406866cfdfa31858d68595cd0f6711b4eecd3a16ae91f00874c4?apiKey=4950322b4f9944b9aa1bf2157e4fb18e&&apiKey=4950322b4f9944b9aa1bf2157e4fb18e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/66c3b7a8c366406866cfdfa31858d68595cd0f6711b4eecd3a16ae91f00874c4?apiKey=4950322b4f9944b9aa1bf2157e4fb18e&&apiKey=4950322b4f9944b9aa1bf2157e4fb18e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66c3b7a8c366406866cfdfa31858d68595cd0f6711b4eecd3a16ae91f00874c4?apiKey=4950322b4f9944b9aa1bf2157e4fb18e&&apiKey=4950322b4f9944b9aa1bf2157e4fb18e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/66c3b7a8c366406866cfdfa31858d68595cd0f6711b4eecd3a16ae91f00874c4?apiKey=4950322b4f9944b9aa1bf2157e4fb18e&&apiKey=4950322b4f9944b9aa1bf2157e4fb18e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/66c3b7a8c366406866cfdfa31858d68595cd0f6711b4eecd3a16ae91f00874c4?apiKey=4950322b4f9944b9aa1bf2157e4fb18e&&apiKey=4950322b4f9944b9aa1bf2157e4fb18e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66c3b7a8c366406866cfdfa31858d68595cd0f6711b4eecd3a16ae91f00874c4?apiKey=4950322b4f9944b9aa1bf2157e4fb18e&&apiKey=4950322b4f9944b9aa1bf2157e4fb18e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/66c3b7a8c366406866cfdfa31858d68595cd0f6711b4eecd3a16ae91f00874c4?apiKey=4950322b4f9944b9aa1bf2157e4fb18e&&apiKey=4950322b4f9944b9aa1bf2157e4fb18e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/66c3b7a8c366406866cfdfa31858d68595cd0f6711b4eecd3a16ae91f00874c4?apiKey=4950322b4f9944b9aa1bf2157e4fb18e&&apiKey=4950322b4f9944b9aa1bf2157e4fb18e"
            className="img"
          />
          <div className="div-4">ParcAuto</div>
        </div>
        <div className="div-5">
          <div className="div-6">Accueil</div>
          <div className="div-7">Services</div>
          <div className="div-8">A propos</div>
          <div className="div-9">Contact</div>
        </div>
      </div>
      <div className="div-10">
        <div className="div-11">
          <div className="div-12">Email</div>
          <div className="div-13">
            <div className="div-14">Welcome!</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/860d84032877aa5820c6da4552feed37d638c44be4f1e0efb9903e78bbcc508e?apiKey=4950322b4f9944b9aa1bf2157e4fb18e&&apiKey=4950322b4f9944b9aa1bf2157e4fb18e"
              className="img-2"
            />
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b6b359d90d8a5313fcfdbce7a7d3faa6930ec5b0024065fc85d56933691385b?apiKey=4950322b4f9944b9aa1bf2157e4fb18e&&apiKey=4950322b4f9944b9aa1bf2157e4fb18e"
          className="img-3"
        />
        <div className="div-15">
          <div className="div-16">Mot de passe</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/535ffdee250ee5f23ecac03584fec2d46fd1216bf8bdd68556168d40c964c89f?apiKey=4950322b4f9944b9aa1bf2157e4fb18e&&apiKey=4950322b4f9944b9aa1bf2157e4fb18e"
            className="img-4"
          />
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b6b359d90d8a5313fcfdbce7a7d3faa6930ec5b0024065fc85d56933691385b?apiKey=4950322b4f9944b9aa1bf2157e4fb18e&&apiKey=4950322b4f9944b9aa1bf2157e4fb18e"
          className="img-5"
        />
        <div className="div-17">Mot de passe oublié ?</div>
        <div className="div-18">Se connecter</div>
      </div>
    </div>
    <style jsx>{`
      .div {
        background-color: rgba(255, 255, 255, 1);
        display: flex;
        padding-bottom: 80px;
        flex-direction: column;
      }
      .div-2 {
        border-radius: 16px;
        background-color: rgba(105, 169, 209, 1);
        display: flex;
        width: 100%;
        gap: 20px;
        color: rgba(255, 255, 255, 1);
        justify-content: space-between;
        padding: 6px 70px 26px 19px;
      }
      @media (max-width: 991px) {
        .div-2 {
          max-width: 100%;
          flex-wrap: wrap;
          padding-right: 20px;
        }
      }
      .div-3 {
        display: flex;
        gap: 15px;
        font-size: 36px;
        font-weight: 800;
        white-space: nowrap;
        text-align: center;
        letter-spacing: 0.72px;
      }
      @media (max-width: 991px) {
        .div-3 {
          white-space: initial;
        }
      }
      .img {
        aspect-ratio: 0.85;
        object-fit: auto;
        object-position: center;
        width: 71px;
      }
      .div-4 {
        font-family: Poppins, sans-serif;
        flex-grow: 1;
        flex-basis: auto;
        margin: auto 0;
      }
      .div-5 {
        display: flex;
        align-items: start;
        gap: 20px;
        font-size: 24px;
        font-weight: 400;
        justify-content: space-between;
        margin: auto 0;
      }
      @media (max-width: 991px) {
        .div-5 {
          max-width: 100%;
          flex-wrap: wrap;
        }
      }
      .div-6 {
        font-family: Poppins, sans-serif;
        white-space: nowrap;
      }
      @media (max-width: 991px) {
        .div-6 {
          white-space: initial;
        }
      }
      .div-7 {
        font-family: Poppins, sans-serif;
        white-space: nowrap;
      }
      @media (max-width: 991px) {
        .div-7 {
          white-space: initial;
        }
      }
      .div-8 {
        font-family: Poppins, sans-serif;
      }
      .div-9 {
        font-family: Poppins, sans-serif;
        align-self: stretch;
      }
      .div-10 {
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0px 16px 40px rgba(154, 170, 207, 0.2);
        align-self: center;
        display: flex;
        margin-top: 86px;
        width: 590px;
        max-width: 100%;
        flex-direction: column;
        align-items: center;
        color: rgba(75, 75, 75, 1);
        font-weight: 400;
        padding: 80px;
      }
      @media (max-width: 991px) {
        .div-10 {
          margin-top: 40px;
          padding: 0 20px;
        }
      }
      .div-11 {
        display: flex;
        margin-top: 23px;
        gap: 20px;
        white-space: nowrap;
      }
      @media (max-width: 991px) {
        .div-11 {
          white-space: initial;
        }
      }
      .div-12 {
        align-self: end;
        margin-top: 120px;
        font: 24px Lato, sans-serif;
      }
      @media (max-width: 991px) {
        .div-12 {
          margin-top: 40px;
        }
      }
      .div-13 {
        display: flex;
        flex-direction: column;
        font-size: 36px;
        flex-grow: 1;
        flex-basis: 0;
        width: fit-content;
      }
      @media (max-width: 991px) {
        .div-13 {
          white-space: initial;
        }
      }
      .div-14 {
        font-family: Lato, sans-serif;
      }
      .img-2 {
        aspect-ratio: 1;
        object-fit: auto;
        object-position: center;
        width: 22px;
        align-self: end;
        margin-top: 118px;
      }
      @media (max-width: 991px) {
        .img-2 {
          margin-top: 40px;
        }
      }
      .img-3 {
        object-fit: auto;
        object-position: center;
        width: 396px;
        margin-top: 17px;
        max-width: 100%;
        border: 1px solid rgba(75, 75, 75, 1);
      }
      .div-15 {
        display: flex;
        margin-top: 49px;
        width: 377px;
        max-width: 100%;
        gap: 20px;
        font-size: 24px;
      }
      @media (max-width: 991px) {
        .div-15 {
          margin-top: 40px;
        }
      }
      .div-16 {
        font-family: Lato, sans-serif;
        flex-grow: 1;
        flex-basis: auto;
      }
      .img-4 {
        aspect-ratio: 1;
        object-fit: auto;
        object-position: center;
        width: 23px;
        align-self: start;
      }
      .img-5 {
        object-fit: auto;
        object-position: center;
        width: 396px;
        margin-top: 16px;
        max-width: 100%;
        border: 1px solid rgba(75, 75, 75, 1);
      }
      .div-17 {
        color: rgba(56, 145, 201, 1);
        align-self: end;
        margin-top: 17px;
        font: 14px Inter, sans-serif;
      }
      @media (max-width: 991px) {
        .div-17 {
          margin-right: 10px;
        }
      }
      .div-18 {
        border-radius: 18px;
        background-color: rgba(56, 145, 201, 1);
        width: 396px;
        max-width: 100%;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        margin: 26px 0;
        padding: 19px 60px;
        font: 24px Poppins, sans-serif;
      }
      @media (max-width: 991px) {
        .div-18 {
          padding: 0 20px;
        }
      }
    `}</style>
  </>
);
}