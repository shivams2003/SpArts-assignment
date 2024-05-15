import express from 'express';
import cors from 'cors';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(express.json());

// Mock data with image URLs
const academies = [
    {
        id: 1,
        name: "Bright Minds Academy",
        services: ["Mathematics", "Science Experiments", "Creative Writing"],
        imageUrl: "https://via.placeholder.com/200x150.png?text=Bright+Minds+Academy",
        testimonial: "Bright Minds Academy has transformed my child's learning experience."
    },
    {
        id: 2,
        name: "Adventure Learning Center",
        services: ["Outdoor Education", "Team Building", "Environmental Studies"],
        imageUrl: "https://via.placeholder.com/200x150.png?text=Adventure+Learning+Center",
        testimonial: "Adventure Learning Center offers the best outdoor activities!"
    },
    {
        id: 3,
        name: "Young Artists Studio",
        services: ["Painting", "Sculpture", "Digital Art"],
        imageUrl: "https://via.placeholder.com/200x150.png?text=Young+Artists+Studio",
        testimonial: "Young Artists Studio has unlocked my child's creative potential."
    },
    {
        id: 4,
        name: "Junior Engineers Academy",
        services: ["Lego Robotics", "Coding for Kids", "Electronics"],
        imageUrl: "https://via.placeholder.com/200x150.png?text=Junior+Engineers+Academy",
        testimonial: "Junior Engineers Academy is amazing for budding engineers!"
    },
    {
        id: 5,
        name: "Fun with Physics",
        services: ["Physics Experiments", "Astronomy", "Energy and Motion"],
        imageUrl: "https://via.placeholder.com/200x150.png?text=Fun+with+Physics",
        testimonial: "Fun with Physics makes learning science so much fun."
    },
    {
        id: 6,
        name: "Little Chefs Culinary School",
        services: ["Cooking Classes", "Baking Basics", "Healthy Eating"],
        imageUrl: "https://via.placeholder.com/200x150.png?text=Little+Chefs+Culinary+School",
        testimonial: "Little Chefs Culinary School is fantastic for young cooks."
    },
    {
        id: 7,
        name: "Junior Explorers Club",
        services: ["Geography", "Cultural Studies", "History Adventures"],
        imageUrl: "https://via.placeholder.com/200x150.png?text=Junior+Explorers+Club",
        testimonial: "Junior Explorers Club offers great educational adventures."
    },
    {
        id: 8,
        name: "Science Wizards Academy",
        services: ["Chemistry Fun", "Biology Basics", "Physics Magic"],
        imageUrl: "https://via.placeholder.com/200x150.png?text=Science+Wizards+Academy",
        testimonial: "Science Wizards Academy has inspired a love for science in my child."
    },
    {
        id: 9,
        name: "Young Musicians Academy",
        services: ["Piano Lessons", "Guitar Basics", "Choir"],
        imageUrl: "https://via.placeholder.com/200x150.png?text=Young+Musicians+Academy",
        testimonial: "Young Musicians Academy has nurtured my child's musical talent."
    },
    {
        id: 10,
        name: "Dance Stars Studio",
        services: ["Ballet", "Hip Hop Dance", "Jazz Dance"],
        imageUrl: "https://via.placeholder.com/200x150.png?text=Dance+Stars+Studio",
        testimonial: "Dance Stars Studio is the best place for young dancers."
    }
];


app.use(express.static(join(__dirname, '../../dist')));

app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../../dist', 'index.html'));
});


app.listen(port, () => {
    console.log(`Mock API server running at http://localhost:${port}`);
});

export default app;