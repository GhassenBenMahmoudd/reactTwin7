import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const Product = ({ product, onLikeToggle, onDislikeToggle, onBuy }) => {
  const [liked, setLiked] = useState(product.like);
  const [likeCount, setLikeCount] = useState(product.likeCount || 0); // Ajout du compteur de like

  // Fonction pour gérer le Like
  const handleLike = () => {
    if (!liked) {  // Si ce n'est pas déjà "Liked"
      setLiked(true);
      setLikeCount(likeCount + 1);  // Incrémente le compteur de like
      onLikeToggle(product.id); // Met à jour l'état global dans Products.jsx
    }
  };

  // Fonction pour gérer le Dislike
  const handleDislike = () => {
    if (liked) {  // Si c'est déjà "Liked", on passe à "Dislike"
      setLiked(false);
      setLikeCount(likeCount - 1);  // Décrémente le compteur de like
      onDislikeToggle(product.id); // Met à jour l'état global dans Products.jsx
    }
  };

  return (
    <Card>
      {/* Si la quantité est 0, affiche "sold_out.png", sinon l'image normale */}
      <Card.Img 
        variant="top" 
        src={product.quantity === 0 ? "/images/sold_out.png" : product.img} 
        alt={product.name} 
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text><strong>Price:</strong> ${product.price}</Card.Text>
        <Card.Text><strong>Quantity Available:</strong> {product.quantity}</Card.Text>
        
        {/* Affichage du compteur de Like */}
        <Card.Text><strong>Likes:</strong> {likeCount}</Card.Text>

        {/* Bouton "Buy Now", désactivé si le produit est épuisé */}
        <Button 
          variant="success" 
          onClick={onBuy} 
          disabled={product.quantity === 0} 
          className="mt-2"
        >
          {product.quantity === 0 ? "Sold Out" : "Buy Now "}
        </Button>

        {/* Boutons séparés Like et Dislike */}
        <Button 
          variant="outline-primary" 
          onClick={handleLike} 
          className="mt-2 ms-2"
          disabled={liked} // Désactive le bouton Like si déjà aimé
        >
          Like 
        </Button>

        <Button 
          variant="outline-danger" 
          onClick={handleDislike} 
          className="mt-2 ms-2"
          disabled={!liked} // Désactive le bouton Dislike si pas aimé
        >
          Dislike 
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;