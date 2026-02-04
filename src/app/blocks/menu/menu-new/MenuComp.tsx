  "use client";
import React, { useState } from "react";
import Image from "next/image";

const MenuComp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const menuItems = [
    {
      id: "cover",
      type: "cover",
      title: "Le Gourmet",
      subtitle: "Menu Dégustation",
      image: "/ourImages/food/menu00.png",
    },
    { name: "Salade César", image: "/ourImages/food/menu1.png" },
    { name: "Carpaccio de bœuf", image: "/ourImages/food/menu2.png" },
    { name: "Soupe à l'Oignon", image: "/ourImages/food/menu3.png" },
    { name: "Filet de Bar", image: "/ourImages/food/menu4.png" },
    { name: "Entrecôte Grillée", image: "/ourImages/food/menu5.png" },
    { name: "Risotto aux Champignons", image: "/ourImages/food/menu6.png" },
    { name: "Plateau de Fromages", image: "/ourImages/food/menu7.png" },
    { name: "Fondant au Chocolat", image: "/ourImages/food/menu8.png" },
    {
      id: "back-cover",
      type: "back-cover",
      title: "Merci",
      subtitle: "À très bientôt",
      image: "/ourImages/food/menu0.png",
    },
  ];

  const renderPageContent = (item: any, index: number) => {
    if (!item) return <div className="empty-page" />;

    if (item.type === "cover" || item.type === "back-cover") {
      return (
        <div className="full-page-layout">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            priority
          />
          <div className="overlay">
            <h1 className="title-large">{item.title}</h1>
            <p className="subtitle">{item.subtitle}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="magazine-page">
        <header className="page-header">PAGE HEADER - {index + 1}</header>
        <div className="magazine-image-container">
          <Image
            src={item.image}
            fill
            className="object-cover"
            alt={item.name}
          />
        </div>
        <div className="magazine-text">
          <h3 className="item-title-magazine">{item.name}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus
            mollis nibh, non convallis ex convallis eu. Suspendisse potenti.
            Aenean vitae pellentesque erat.
          </p>
        </div>
        <footer className="page-footer">{index + 1}</footer>
      </div>
    );
  };

  return (
    <div className="book-scene">
      <div className="book-container">
        {/* Reliure centrale (Spine) */}
        <div className="book-spine"></div>

        {menuItems.map((item, index) => {
          const isFlipped = index < currentIndex;
          // Gestion du Z-index pour que les pages s'empilent correctement
          const zIndex = isFlipped ? index : menuItems.length - index;

          return (
            <div
              key={index}
              className={`book-page ${isFlipped ? "flipped" : ""}`}
              style={{ zIndex }}
            >
              {/* FACE AVANT (Côté droit du livre) */}
              <div className="page-face front">
                {renderPageContent(item, index)}
                <div className="inner-shadow-right"></div>
              </div>

              {/* FACE ARRIÈRE (Côté gauche quand on tourne) */}
              <div className="page-face back">
                <div className="back-content">
<div className="page-header">
  <img
    src="/logo1.png"
    alt="Le Gourmet"
    className="mx-auto"
  />
</div>
                  <div className="logo-watermark">LG</div>
                </div>
                <div className="inner-shadow-left"></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="book-controls">
        <button
          onClick={() => setCurrentIndex((c) => Math.max(0, c - 1))}
          disabled={currentIndex === 0}
          className="btn"
        >
          Previous page
        </button>
        <span className="page-indicator">
          [{currentIndex} of {menuItems.length}]
        </span>
        <button
          onClick={() =>
            setCurrentIndex((c) => Math.min(menuItems.length, c + 1))
          }
          disabled={currentIndex === menuItems.length}
          className="btn"
        >
          Next page
        </button>
      </div>

      <style jsx>{`
        .book-scene {
          min-height: 100vh;
          background: #f0f0f0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          perspective: 2500px;
        }

        .book-container {
          width: 450px; /* Largeur d'une seule page */
          height: 600px;
          position: relative;
          transform-style: preserve-3d;
          /* On décale vers la droite pour que le livre ouvert soit centré */
          transform: translateX(50%);
        }

        .book-spine {
          position: absolute;
          left: 0;
          top: 0;
          width: 2px;
          height: 100%;
          background: rgba(0, 0, 0, 0.2);
          z-index: 100;
        }

        .book-page {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          transform-origin: left center;
          transition: transform 1.2s cubic-bezier(0.645, 0.045, 0.355, 1);
          transform-style: preserve-3d;
          cursor: pointer;
        }

        .book-page.flipped {
          transform: rotateY(-180deg);
        }

        .page-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          background: #fdfaf7;
          box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
          padding: 20px;
        }

        .page-face.front {
          border-radius: 0 10px 10px 0;
        }

        .page-face.back {
          transform: rotateY(180deg);
          border-radius: 10px 0 0 10px;
          background: #f5f0eb;
        }

        /* Styles Magazine (Comme votre image) */
        .magazine-page {
          height: 100%;
          display: flex;
          flex-direction: column;
          color: #555;
        }

        .page-header {
          text-align: center;
          font-weight: bold;
          margin-bottom: 20px;
          font-family: sans-serif;
          letter-spacing: 1px;
        }

        .magazine-image-container {
          position: relative;
          width: 100%;
          height: 250px;
          margin-bottom: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .magazine-text {
          font-size: 0.9rem;
          line-height: 1.5;
          text-align: justify;
        }

        .item-title-magazine {
          font-family: serif;
          font-size: 1.2rem;
          margin-bottom: 10px;
          color: #222;
        }

        .page-footer {
          margin-top: auto;
          text-align: right;
          font-size: 0.8rem;
        }

        /* Effets d'ombre centrale */
        .inner-shadow-right {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 40px;
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.1),
            transparent
          );
          pointer-events: none;
        }

        .inner-shadow-left {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 40px;
          background: linear-gradient(to left, rgba(0, 0, 0, 0.1), transparent);
          pointer-events: none;
        }

        .logo-watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 8rem;
          opacity: 0.03;
          font-family: serif;
        }

        .full-page-layout {
          position: relative;
          height: 100%;
          width: 100%;
          margin: -20px;
        }
        .object-cover {
          object-fit: cover;
        }
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
        }

        .book-controls {
          margin-top: 40px;
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .btn {
          background: #2cb3c4;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
        }

        .btn:disabled {
          background: #ccc;
        }
        .page-indicator {
          font-family: sans-serif;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
};

export default MenuComp;