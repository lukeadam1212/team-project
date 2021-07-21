// Database
const mongoose = require(`mongoose`);
const dotenv = require(`dotenv`);
const colors = require(`colors`);

const Table = require(`./models/tableModel`);

dotenv.config();

let tables = [
    {
        image: "https://www.furnitureloft.co.uk/ProductImages/385/19293_1591188216_1.jpg",
        title: "Dressing Table",
        measurements: "Width: 1200mm x Depth: 450mm x Height: 800mm",
        color: "light sand",
        material: "Rutland Oak"
    },
    {
        image: "https://www.furnitureloft.co.uk/ProductImages/409/20459_1617021742_1.jpg",
        title: "Storage Coffee Table with Drawers",
        measurements: "Width: 1200mm x Depth: 600mm x Height: 510mm",
        color: "sand",
        material: "Oakham Oak"
    },
    {
        image: "https://www.furnitureloft.co.uk/ProductImages/253/12696_1533727656_1.jpg",
        title: "Extending Dining Table",
        measurements: "Width: 1250mm x Depth: 850mm x Height: 790mm",
        color: "light birch",
        material: "Butterfly Limed Oak"
    },
    {
        image: "https://www.furnitureloft.co.uk/ProductImages/262/13113_1546420431_1.jpg",
        title: "Console Table with 2 Drawers",
        measurements: "Width: 870mm x Depth: 350mm x Height: 755mm",
        color: "soft orange",
        material: "Portland Oak"
    },
    {
        image: "https://www.furnitureloft.co.uk/ProductImages/281/14085_1554279804_1.jpg",
        title: "Coffee Table",
        measurements: "Width: 900mm x Depth: 450mm x Height: 450mm",
        color: "light sand",
        material: "Nordic Oak"
    },
    {
        image: "https://www.furnitureloft.co.uk/ProductImages/389/19453_1591776929_1.jpg",
        title: "Iona Lamp Table",
        measurements: "Width: 600mm x Depth: 500mm x Height: 500mm",
        color: "soft oak",
        material: "Rustic Oak"
    },
    {
        image: "https://www.furnitureloft.co.uk/ProductImages/383/19181_1591014331_1.jpg",
        title: "Collection Large Tv Unit",
        measurements: "Width: 1500mm x Depth: 400mm x Height: 500mm",
        color: "soft pine",
        material: "Industrial Oak"
    },
    {
        image: "https://www.furnitureloft.co.uk/ProductImages/200/10032_1499182376_1.jpg",
        title: "Dressing Table",
        measurements: "Width: 1100mm x Depth: 480mm x Height: 770mm",
        color: "light yellow",
        material: "Manhattan Oak"
    },
    {
        image: "https://www.furnitureloft.co.uk/ProductImages/249/12485_1528208837_1.jpg",
        title: "3 Door Oak Sideboard",
        measurements: "Width: 1400mm x Depth: 450mm x Height: 850mm",
        color: "strong oak  ",
        material: "Fusion Oak"
    },
    {
        image: "https://www.furnitureloft.co.uk/ProductImages/384/19238_1591024493_1.jpg",
        title: "Collection Blanket Box",
        measurements: "Width: 1000mm x Depth: 500mm x Height: 500mm",
        color: "light orange",
        material: "Country Oak"
    },
    ];


  // Connecting MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).then(res => {
    console.log(`Connected to MongoDB from seeder`.red.underline);


        Table.insertMany(tables);
    })
    .catch(err => console.log(err.red.underline));