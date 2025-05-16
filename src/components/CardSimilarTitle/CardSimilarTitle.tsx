import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import AgeGroup from "../AgeGroup/AgeGroup";
import imageNotAvailable from "../../assets/No_Image_Available.jpg";
import { MovieAgeGroupsProps } from "../../types/movies/movies";
import { Link, useLocation } from "react-router-dom";

export default function CardSimilarTitle({
  backdrop_path,
  overview,
  title,
  name,
  id,
  age,
  date_release,
}: MovieAgeGroupsProps) {
  const location = useLocation();
  return (
    <Link
      to={`/details/${id}/${title || name}`}
      state={{ backgroundLocation: location }}
    >
      <Card
        sx={{
          width: 285,
          height: 420,
          backgroundColor: "#2F2F2F",
          color: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardActionArea
          sx={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <CardMedia
            component="img"
            image={
              !backdrop_path
                ? imageNotAvailable
                : `https://image.tmdb.org/t/p/original${backdrop_path}`
            }
            alt="Poster Filme"
            sx={{
              width: "100%",
              height: 160,
              objectFit: "cover",
            }}
          />

          <CardContent sx={{ flex: 1, width: "100%" }}>
            <Typography gutterBottom variant="h6" component="div" noWrap>
              {title || name}
            </Typography>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "10px",
              }}
            >
              <AgeGroup age={age} />
              <Typography variant="body2" sx={{ color: "white" }}>
                {date_release}
              </Typography>
            </div>

            <Typography
              variant="body2"
              sx={{
                color: "white",
                display: "-webkit-box",
                WebkitLineClamp: 5,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {overview}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
