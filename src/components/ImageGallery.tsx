import React from "react";
import { ImageList, ImageListItem } from "@mui/material";

interface Props {
  images: string[];
}

export const ImageGallery: React.FC<Props> = ({ images }: Props) => {
  return (
    <ImageList
      sx={{ width: "100%", height: 500 }}
      variant="quilted"
      cols={4}
      rowHeight={200}
    >
      {images.map((image: string) => (
        <ImageListItem key={image}>
          <img
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt="Imagen de la nota"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
