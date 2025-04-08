import { ReactNode, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Card } from "@workspace/ui/components/card";
import { Button } from "@workspace/ui/components/button";
import { Heart } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";

interface ItemCardProps {
  title: string;
  description: string;
  children?: ReactNode;
  image: string;
  onFavoriteButtonPressed?: (isFavorite:boolean) => void;
  isFav?: boolean;
}

export default function ItemCard({
  title,
  description,
  image = "/placeholder.svg",
  onFavoriteButtonPressed,
  isFav = false,
  children,
}: ItemCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFavorite, setIsFavorite] = useState(isFav);
  const toggleFlip = () => setIsFlipped(!isFlipped);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    onFavoriteButtonPressed?.(isFavorite);
  };

  return (
    <div className="w-full h-[480px] relative perspective">
      <div className="w-full h-full relative">
        {isFlipped ? (
          <CardBack
            title={title}
            description={description}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
            toggleFlip={toggleFlip}
          />
        ) : (
          <CardFront
            title={title}
            description={description}
            image={image}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
            toggleFlip={toggleFlip}
          >
            {children}
          </CardFront>
        )}
      </div>
    </div>
  );
}

interface CardFaceProps {
  title: string;
  description: string;
  isFavorite: boolean;
  children?: ReactNode;
  toggleFavorite: () => void;
  toggleFlip: () => void;
}

interface CardFrontProps extends CardFaceProps {
  image: string;
}

function CardFront({
  title,
  description,
  image,
  isFavorite,
  toggleFavorite,
  toggleFlip,
  children,
}: CardFrontProps) {
  return (
    <motion.div className="absolute w-full h-full">
      <Card className="overflow-hidden hover:shadow-lg w-full h-[480px] mx-auto">
        <div className="aspect-square relative bg-muted w-full h-[300px] overflow-hidden group">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain bg-transparent group-hover:scale-110"
          />
        </div>
        <div className="p-4 flex flex-col h-[180px]">
          <CardHeader
            title={title}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
          />
          <p className="text-sm text-muted-foreground line-clamp-2 mb-auto">
            {description}
          </p>
          {children}
          <Button
            variant="outline"
            size="sm"
            onClick={toggleFlip}
            className="w-full mt-auto"
          >
            Read Description
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}

function CardBack({
  title,
  description,
  isFavorite,
  toggleFavorite,
  toggleFlip,
}: CardFaceProps) {
  return (
    <motion.div
      className="absolute w-full h-full"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <Card className="overflow-hidden hover:shadow-lg w-full min-h-[480px] mx-auto p-6 flex flex-col">
        <CardHeader
          title={title}
          isFavorite={isFavorite}
          toggleFavorite={toggleFavorite}
        />
        <div className="overflow-y-auto flex-grow mb-4">
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={toggleFlip}
          className="w-full mt-auto"
        >
          Back to Card
        </Button>
      </Card>
    </motion.div>
  );
}

interface CardHeaderProps {
  title: string;
  isFavorite: boolean;
  toggleFavorite: () => void;
}

function CardHeader({ title, isFavorite, toggleFavorite }: CardHeaderProps) {
  return (
    <div className="flex justify-between items-start mb-4">
      <h3 className="font-semibold text-xl">{title}</h3>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        onClick={toggleFavorite}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <motion.div
          whileTap={{ scale: 0.85 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Heart
            className={cn("h-5 w-5", isFavorite && "fill-red-500 text-red-500")}
          />
        </motion.div>
      </Button>
    </div>
  );
}
