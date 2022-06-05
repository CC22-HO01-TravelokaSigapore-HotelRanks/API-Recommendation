# Cloud Computing Path
Creating RESTful APIs and deploying to Google Cloud Platform Using [Google Cloud Run](https://cloud.google.com/run) for communication between Machine Learning Recommendation System Model and Mobile Development. Creating database in [Google Cloud SQL](https://cloud.google.com/sql)

---

# RESTful API 
In making the RESTful APIs we use [Sequelize](https://sequelize.org), [ExpressJS](https://expressjs.com), [CORS](https://enable-cors.org/index.html), [NodeJS](https://nodejs.org/en/) 

# List APIs
In this section there is a list of all Hotel APIs that can be Sorted:
 1. API-Hotel
 2. Login-Register API
 3. Review API
![Gambar API](https://www.pngitem.com/pimgs/m/417-4174723_application-programming-interface-tradeix-network-infrastructure-icon-png.png) 

# API-Hotel
In this section there is a Hotel API that can be used to be main foundation of our hotel apps. Response from each URL using JSON format.

- Base URL
>https://hotel-test-ywu6raktuq-uc.a.run.app

- Path
>hotel/list

- Method
><Code><font color="green">GET</font></Code> 

- List All Hotel
>https://hotel-test-ywu6raktuq-uc.a.run.app/hotel/list

- Example request
>curl --location --request GET 'https://hotel-test-ywu6raktuq-uc.a.run.app/hotel/list'

This API is mainly to get the list of the hotel for the users
```javascript
{
    {
    "message": "Success",
    "data": [
        {
            "type_nearby_destination": [
                "family park",
                " botanical"
            ],
            "image_links": [
                "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/62/d3/ff.jpg",
                " https://media-cdn.tripadvisor.com/media/vr-splice-j/03/5c/32/76.jpg",
                " https://media-cdn.tripadvisor.com/media/vr-splice-j/03/5c/32/d3.jpg",
                " https://media-cdn.tripadvisor.com/media/vr-splice-j/03/5c/33/2d.jpg",
                " https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/59560252.jpg?k=4f58bd80c52da6a0db7482fac8c83572a180b36173856c6850b551325a77ae88&o="
            ],
            "id": 1,
            "name": "Bunga Neil Villa -  3 Bedrooms - Seminyak",
            "latitude": "-8.685924978406074",
            "longitude": "115.16562524113574",
            "neighborhood": "Seminyak",
            "hotel_star": "5.0",
            "price_per_night": 191,
            "free_refund": false,
            "nearby_destination": 2,
            "breakfast": true,
            "pool": false,
            "wifi": false,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": true,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "family park",
                " mall"
            ],
            "image_links": [
                "https://q-xx.bstatic.com/xdata/images/hotel/840x460/314956872.jpg?k=6ad18f6ddeb23fdec75d3ecfeaf9f3bd97325b120cb56c26424106ae6363553c&o=",
                " https://q-xx.bstatic.com/xdata/images/hotel/840x460/301041590.jpg?k=a296ab28fa424c940db653ac19556049b45024137e1cf86ba6fd2f4a05157b9d&o=",
                " https://cf.bstatic.com/xdata/images/hotel/max1280x900/78603244.jpg?k=afcd3a6144004b3ef46195d251b76c56bb41007038883ff106f28342f8e8d7f2&o=&hp=1",
                " https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/03/12/a861bae4-65e3-4e37-9b69-52a2b6eabb12-1615562790377-88c9381d81aa5069ad0df8edb9671aec.jpg",
                " https://apollo-singapore.akamaized.net/v1/files/4nppaofhi5bd2-ID/image;s=850x0"
            ],
            "id": 2,
            "name": "M2 Villa - 5 Bedrooms - Seminyak",
            "latitude": "-8.693696885672502",
            "longitude": "115.17636248858744",
            "neighborhood": "Seminyak",
            "hotel_star": "4.5",
            "price_per_night": 258,
            "free_refund": false,
            "nearby_destination": 2,
            "breakfast": false,
            "pool": false,
            "wifi": false,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "historical"
            ],
            "image_links": [
                "https://images.squarespace-cdn.com/content/v1/57b5ffb16b8f5b060338d2c3/1540365026566-2TFPU39NUU9YHAXZNZMV/untitled-8915.jpg?format=1000w",
                " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHMBnL7Q5gsJY8bIX0vGJoG6k2XLpUJ3SFVpw_V21jGPYTSMrFThEipmaVkbx-7kys7ec&usqp=CAU",
                " https://images.squarespace-cdn.com/content/v1/57b5ffb16b8f5b060338d2c3/1479811522485-3VZBP1OXCIWTU3NK8YG2/tg.jpg?format=1500w",
                " https://images.squarespace-cdn.com/content/v1/57b5ffb16b8f5b060338d2c3/1471871042460-CXD63F4HY2MK4DYFF1FO/image-asset.jpeg?format=1000w",
                " https://images.squarespace-cdn.com/content/v1/57b5ffb16b8f5b060338d2c3/1543108158985-IYHFOJQHI6O0O7T31EGZ/untitled-0341.jpg?format=1000w"
            ],
            "id": 3,
            "name": "Trinity Gardens - Wild and Beautiful",
            "latitude": "-8.498648186564072",
            "longitude": "115.25914837869784",
            "neighborhood": "Ubud",
            "hotel_star": "5.0",
            "price_per_night": 134,
            "free_refund": false,
            "nearby_destination": 1,
            "breakfast": true,
            "pool": true,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": false,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "sport",
                " zoo",
                " historical"
            ],
            "image_links": [
                "https://indonesia.tripcanvas.co/wp-content/uploads/2016/06/2-3-via-suse_cologne.jpg",
                " https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000177-800x533-FIT_AND_TRIM-d543df440b2e98cd67099e123de411a0.jpeg?_src=imagekit&tr=c-at_max",
                "h-488",
                "q-40",
                "w-768",
                " https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000227-66a1d26576e28e469b021ff648b76af6.jpeg?_src=imagekit&tr=c-at_max",
                "h-488",
                "q-40",
                "w-768",
                " https://img.traveltriangle.com/blog/wp-content/uploads/2014/11/Karma-Kandara1.jpg",
                " https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20056290-8ab1e8ba237bb4ab4eeb98345261d09e.jpeg?_src=imagekit&tr=c-at_max",
                "h-488",
                "q-40",
                "w-768"
            ],
            "id": 4,
            "name": "Romantic Retreat Nature View Umalas",
            "latitude": "-8.665436634983566",
            "longitude": "115.16407590794638",
            "neighborhood": "North Kuta",
            "hotel_star": "5.0",
            "price_per_night": 118,
            "free_refund": false,
            "nearby_destination": 4,
            "breakfast": false,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": false,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": true,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "culinary",
                " mall",
                " botanical",
                " historical"
            ],
            "image_links": [
                "https://s3.ap-southeast-2.amazonaws.com/thebalibible.com/uploads/images/venue/594039e685ffcf9bdab11baaff970a14.jpg?v=1",
                " https://pix10.agoda.net/hotelImages/474386/-1/c08b97d6183862230531a97a39f9d8b0.jpg?ca=9&ce=1&s=1024x768",
                " https://www.ubud-villas.com/wp-content/uploads/2021/10/Villa-Hijau_Feature.jpg",
                " https://cf.bstatic.com/xdata/images/hotel/max1280x900/161708562.jpg?k=5454bd2da0494840970988b976c80e89033e795e58b8d85324db3dffa5441055&o=&hp=1",
                " https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/102636121.jpg?k=9d9bb609f20a1ef1e5fe01541db64dc064e24c1800a60dc55917cb9d191d29ab&o="
            ],
            "id": 5,
            "name": "Villa Hijau - Peace and tranquility.",
            "latitude": "-8.500065498130304",
            "longitude": "115.25048098974094",
            "neighborhood": "Ubud",
            "hotel_star": "5.0",
            "price_per_night": 81,
            "free_refund": false,
            "nearby_destination": 5,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": false,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": true,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "zoo"
            ],
            "image_links": [
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/347027067.jpg?k=f4fc09bf760d47050f498501459efaf2e8e5f802cb65137425aad00ad76734b6&o=&hp=1",
                " https://cf.bstatic.com/xdata/images/hotel/max1024x768/350202878.jpg?k=a922e546b808d3c5e30b6f0068307d1cbe861efe14bb29ef764012f121cdf4dd&o=&hp=1",
                " https://media-cdn.tripadvisor.com/media/photo-m/1280/14/ce/46/8b/bloom-villas-near-to.jpg",
                " https://q-xx.bstatic.com/xdata/images/hotel/max500/255977776.jpg?k=42c66dc43dd0a13c508299da64f6196af7a88d3c27342552f4cf869accf970ca&o=",
                " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/ac/59/a3/getlstd-property-photo.jpg?w=900&h=-1&s=1"
            ],
            "id": 6,
            "name": "Flower Gang Villa",
            "latitude": "-8.690206274969274",
            "longitude": "115.16562087315400",
            "neighborhood": "Seminyak",
            "hotel_star": "4.5",
            "price_per_night": 37,
            "free_refund": false,
            "nearby_destination": 1,
            "breakfast": true,
            "pool": true,
            "wifi": true,
            "parking": false,
            "smoking": true,
            "air_conditioner": false,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 1
        },
        {
            "type_nearby_destination": [
                "family park",
                " botanical"
            ],
            "image_links": [
                "https://cdn.villaway.com/202303/external/5542080da82684589c69fb4e/bg_u089zuiv88_202303.jpg",
                " https://www.letsbookhotel.com/img/max300/728/7280828.jpg",
                " https://q-xx.bstatic.com/xdata/images/hotel/max300/200294860.jpg?k=86ff39758ab945035a20be3a9ba0c18765e1d46bb1d68f388fb7a045b3ffa97c&o=",
                " https://pix10.agoda.net/hotelImages/335/335525/335525_14042117050019143584.jpg?ca=2&ce=1&s=1024x768",
                " https://baliluxuryprivatevillas.com/villas-photo/gallery/177_93740773017.jpg"
            ],
            "id": 7,
            "name": "Villa Umah Kedash Seminyak",
            "latitude": "-8.686692350019259",
            "longitude": "115.16865221221650",
            "neighborhood": "Seminyak",
            "hotel_star": "4.5",
            "price_per_night": 258,
            "free_refund": false,
            "nearby_destination": 3,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "family park",
                " culinary",
                " historical"
            ],
            "image_links": [
                "https://pix10.agoda.net/hotelImages/119/1195651/1195651_17092813340056887167.jpg?ca=6&ce=1&s=1024x768",
                " https://pix10.agoda.net/hotelImages/119/1195651/1195651_16110313120048386478.jpg?ca=6&ce=1&s=1024x768",
                " https://q-xx.bstatic.com/xdata/images/hotel/840x460/245394467.jpg?k=88b546a472cc64b7170685b7cb0c9194ddbb10fa55380bb7c3ad16f6ec78cc41&o=",
                " https://pix10.agoda.net/hotelImages/4643527/-1/f3e169aea00c76fe4895bacdd4983653.jpg?ca=9&ce=1&s=1024x768",
                " https://pix10.agoda.net/hotelImages/569/569796/569796_14030509010018550993.jpg?ca=2&ce=1&s=1024x768"
            ],
            "id": 8,
            "name": "Ideal Young Family / Couple house GIANT Pool Sanur",
            "latitude": "-8.692751600212219",
            "longitude": "115.25938325148783",
            "neighborhood": "Sanur",
            "hotel_star": "5.0",
            "price_per_night": 56,
            "free_refund": false,
            "nearby_destination": 3,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": true,
            "staff_vaccinated": true,
            "child_area": true,
            "price_category": 1
        },
        {
            "type_nearby_destination": [
                "mall",
                " zoo"
            ],
            "image_links": [
                "https://q-xx.bstatic.com/xdata/images/hotel/840x460/191540711.jpg?k=e5a0a37e6f0cf7bf29893b3c6f53452055521924602ff7072cbcee6e6e558294&o=",
                " https://images.squarespace-cdn.com/content/v1/585562bcbe659442d503893f/1491363523070-JNI82HAL7L4NSKS7TDWO/Exotik+Villas+-+Uluwatu+Cliff+Apartment+%288%29.jpg",
                " https://images.squarespace-cdn.com/content/v1/585562bcbe659442d503893f/1491363717053-JAQQEX6QO1YUUVPZRQMJ/Exotik+Villas+-+Uluwatu+Cliff+Apartment+%2810%29.jpg",
                " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLsWDNM5wIJGpDWEHwnIHDYAZnigzucd0sfXJ_1irwu4fnUAafyMEIApt_DA2aRagJrx4&usqp=CAU",
                " https://images.squarespace-cdn.com/content/v1/585562bcbe659442d503893f/1491363019217-YVJPWYIGIIZ8UWMHNCKA/Exotik+Villas+-+Uluwatu+Cliff+Apartment+%2811%29.jpg"
            ],
            "id": 9,
            "name": "Uluwatu Cliff Apartment - 2Br - Ocean View",
            "latitude": "-8.794299625805042",
            "longitude": "115.19936515871792",
            "neighborhood": "South Kuta/Bukit Peninsula",
            "hotel_star": "4.5",
            "price_per_night": 146,
            "free_refund": false,
            "nearby_destination": 2,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": false,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": true,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "sport",
                " zoo"
            ],
            "image_links": [
                "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/116178358.jpg?k=868ee88ea6c6df2e81c3d179b58ab1934a09414952b517d854a4c319f965b411&o=",
                " https://q-xx.bstatic.com/xdata/images/hotel/max500/116178399.jpg?k=534e2d27903770dbc838a2858f28a15f840afbd6bd8f7e02894d35109c98ae1d&o=",
                " https://p.bookcdn.com/data/Photos/320x200/4417/441775/441775890/Mesari-Sikih-At-Villa-Moyo-Umalas-photos-Exterior-Hotel-information.JPEG",
                " https://p.bookcdn.com/data/Photos/320x200/4417/441782/441782127/Mesari-Sikih-At-Villa-Moyo-Umalas-photos-Exterior-Hotel-information.JPEG",
                " https://p.bookcdn.com/data/Photos/320x200/4417/441778/441778260/Mesari-Sikih-At-Villa-Moyo-Umalas-photos-Exterior-Hotel-information.JPEG"
            ],
            "id": 10,
            "name": "Mesari Sikih at Villa Moyo Umalas, North Kuta",
            "latitude": "-8.655730946416560",
            "longitude": "115.15413980891144",
            "neighborhood": "North Kuta",
            "hotel_star": "4.5",
            "price_per_night": 262,
            "free_refund": false,
            "nearby_destination": 2,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
            }
        ]
    }
}
```
- List Hotel By Search
>https://hotel-test-ywu6raktuq-uc.a.run.app/search?keyword=name
- Path
>/search?keyword=name

- Required
>Keyword=[varchar]
    
- Example Request
>curl --location --request GET 'https://hotel-test-ywu6raktuq-uc.a.run.app/search?keyword=bali'

This endpoint is mainly for searching purposes. The "keyword" parameter is a must when searching.
```javascript
{
    "message": "Success",
    "data": [
        {
            "type_nearby_destination": [
                "mall",
                " zoo",
                " botanical",
                " historical"
            ],
            "image_links": [
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/281375126.jpg?k=4cece1385abeaba117b036edcfb3e6400116c999a4f3959dfcf5b3fe1777e341&o=&hp=1",
                " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/9f/d1/d4/amazing-and-wonderful.jpg?w=900&h=-1&s=1",
                " https://www.ministryofvillas.com/wp-content/uploads/2012/11/bali-latalianavilla-02-800x530.jpg",
                " https://i.pinimg.com/736x/2e/e2/32/2ee23278508f8ebc1b1fd1d1acadc676.jpg",
                " https://pix10.agoda.net/hotelImages/276948/-1/fc0be78fcc6b7eedf9aeb59ab1f660b4.jpg?ca=10&ce=1&s=1024x768"
            ],
            "id": 11,
            "name": "❤PROMO❤ Little Balinese Open Villa!!",
            "latitude": "-8.713859330790827",
            "longitude": "115.17517877474460",
            "neighborhood": "Kuta Village",
            "hotel_star": "5.0",
            "price_per_night": 37,
            "free_refund": false,
            "nearby_destination": 4,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": false,
            "air_conditioner": true,
            "wheelchair_access": true,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 1
        },
        {
            "type_nearby_destination": [
                "family park",
                " zoo"
            ],
            "image_links": [
                "https://a0.muscache.com/im/pictures/a63b7c96-5e6f-46e6-aa6b-499d29fc1562.jpg?im_w=720",
                " https://www.vilondo.com/wp-content/uploads/2018/11/bali-bersantaivillas-villasinta-02-800x530.jpg",
                " https://images.squarespace-cdn.com/content/v1/575e2af0859fd02bebd297c7/1465858240068-DM39D4C0GVOMSEAN0N0Y/image-asset.jpeg?format=1000w",
                " https://www.ministryofvillas.com/wp-content/uploads/2016/08/bali-bersantaivillas-villasinta-05.jpg",
                " https://pix10.agoda.net/hotelImages/127/1270498/1270498_16121509280049686297.jpg?ca=6&ce=1&s=1024x768"
            ],
            "id": 13,
            "name": "VILLA SINTA NUSA LEMBONGAN ISLAND, BALI- 1 Bedroom",
            "latitude": "-8.680133668831807",
            "longitude": "115.44495931906329",
            "neighborhood": "Nusa Lembongan/Nusa Ceningan",
            "hotel_star": "5.0",
            "price_per_night": 159,
            "free_refund": false,
            "nearby_destination": 2,
            "breakfast": false,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": true,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "botanical"
            ],
            "image_links": [
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/36057502.jpg?k=17285ebdaf64fa436a748d639b40274cb20e8150ffdd335eaf28a0baf4598b83&o=&hp=1",
                " https://cf.bstatic.com/xdata/images/hotel/max1024x768/100354372.jpg?k=6fa862e8e1f0134b83e189aa63507de0317246b14e8a2d6bfb2b8dd0df5aef84&o=&hp=1",
                " https://yomavillasbali.com/wp-content/uploads/2016/09/Yoma-Villas-Bali-Luxury-Accommodation-Villa-Batur-Gallery-13.jpg",
                " https://cf.bstatic.com/xdata/images/hotel/max1280x900/33256054.jpg?k=9db8a051b075ab4b7b36937d098d9e59a3353bef16ece8446f584505adccce6a&o=&hp=1",
                " https://cf.bstatic.com/xdata/images/hotel/max500/240326281.jpg?k=67ea352e72c793ca1fc4fd44352f48ca2a0c491dcecb950ce8d796be69e640c8&o=&hp=1"
            ],
            "id": 15,
            "name": "Yoma Villas Bali - Villa Batur 3 bedroom",
            "latitude": "-8.641679783016158",
            "longitude": "115.13408163470034",
            "neighborhood": "Canggu",
            "hotel_star": "5.0",
            "price_per_night": 185,
            "free_refund": false,
            "nearby_destination": 1,
            "breakfast": false,
            "pool": false,
            "wifi": false,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "culinary",
                " zoo"
            ],
            "image_links": [
                "https://cimages.elitehavens.com/images/gallery/lowres/Asada/Villa-Asada-Listing-738x488.jpg",
                " https://images.squarespace-cdn.com/content/v1/585562bcbe659442d503893f/c3b765c0-45e3-46b3-9ff9-b4101fb30674/01.+Exotik+Villas+Bali+-+Aloui.jpg",
                " https://media-cdn.tripadvisor.com/media/vr-splice-j/02/38/43/95.jpg",
                " https://cimages.elitehavens.com/images/gallery/lowres/P00068/Villa-Hamsa-Listing-734x488.jpg",
                " https://cimages.elitehavens.com/images/gallery/mobile/P00068/09-Sohamsa%20Estate%20-%20Villa%20Hamsa%20-%20Pool%20area.jpg"
            ],
            "id": 25,
            "name": "Charlottes Villa Bali",
            "latitude": "-8.811342345524992",
            "longitude": "115.15950747202918",
            "neighborhood": "South Kuta/Bukit Peninsula",
            "hotel_star": "4.5",
            "price_per_night": 185,
            "free_refund": false,
            "nearby_destination": 2,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "botanical",
                " historical",
                " culinary",
                " mall",
                " sport"
            ],
            "image_links": [
                "https://media-cdn.tripadvisor.com/media/vr-splice-j/09/53/86/f6.jpg",
                " https://q-xx.bstatic.com/xdata/images/hotel/max500/242358993.jpg?k=332c0e7a1373b32988e389dc63221a14c0380212057a158d55bd811382505cab&o=",
                " https://media-cdn.tripadvisor.com/media/photo-s/15/ae/df/a2/loft-villa-with-garden.jpg",
                " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQByebERoSXp4Od9ExYMZedir33F1IvoNEEuK9UeoS-eJUXXon4pRLRTd3Qi3HvEcDGRM0&usqp=CAU",
                " https://ak-d.tripcdn.com/images/200m0k000000c2e8x52A1_Z_550_412_R5_Q70_D.jpg"
            ],
            "id": 26,
            "name": "Happy Together Bali, Modern Loft -Central Seminyak",
            "latitude": "-8.686915079780080",
            "longitude": "115.15910919990424",
            "neighborhood": "Seminyak",
            "hotel_star": "5.0",
            "price_per_night": 96,
            "free_refund": false,
            "nearby_destination": 5,
            "breakfast": false,
            "pool": true,
            "wifi": false,
            "parking": true,
            "smoking": false,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": false,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "sport",
                " mall",
                " zoo",
                " historical"
            ],
            "image_links": [
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/246962873.jpg?k=03fb3a93105ea6c80471191b4e048e0113ffbbeaa732e09266dcac06c311075b&o=&hp=1",
                " https://pix10.agoda.net/hotelImages/18168579/0/d90753b6c6a5a89e8e4526b565121098.jpg?ca=15&ce=1&s=1024x768",
                " https://pix10.agoda.net/hotelImages/2990185/0/2e8aa3f5d306e9a38ec0f71780ec761a.jpg?ca=0&ce=1&s=768x1024",
                " https://media-cdn.tripadvisor.com/media/vr-splice-j/04/b0/af/a0.jpg",
                " https://pix10.agoda.net/hotelImages/445/4458916/4458916_18020911280061664479.jpg?ca=6&ce=1&s=1024x768"
            ],
            "id": 44,
            "name": "2 Bedrooms Private Villa with pool",
            "latitude": "-8.463010503289933",
            "longitude": "115.27410343725140",
            "neighborhood": "Bali",
            "hotel_star": "5.0",
            "price_per_night": 180,
            "free_refund": false,
            "nearby_destination": 4,
            "breakfast": true,
            "pool": true,
            "wifi": false,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": true,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "family park",
                " historical",
                " culinary",
                " sport",
                " zoo"
            ],
            "image_links": [
                "https://media-cdn.tripadvisor.com/media/vr-splice-j/00/d7/25/cd.jpg",
                " https://media-cdn.tripadvisor.com/media/vr-splice-j/00/d7/16/33.jpg",
                " https://media-cdn.tripadvisor.com/media/vr-splice-j/00/d7/1f/d3.jpg",
                " https://media-cdn.tripadvisor.com/media/vr-splice-j/00/d7/1e/49.jpg",
                " https://media-cdn.tripadvisor.com/media/vr-splice-j/00/d7/22/ed.jpg"
            ],
            "id": 49,
            "name": "Bali Beach SurfHouse,Bingin 3 Bedrm",
            "latitude": "-8.807330543043426",
            "longitude": "115.11299652440400",
            "neighborhood": "South Kuta/Bukit Peninsula",
            "hotel_star": "4.0",
            "price_per_night": 211,
            "free_refund": false,
            "nearby_destination": 5,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": true,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "botanical"
            ],
            "image_links": [
                "https://a.cdn-hotels.com/gdcs/production131/d693/f9add343-45f6-4fbe-bb89-75b9fb9edd16.jpg?impolicy=fcrop&w=800&h=533&q=medium",
                " https://bali.com/wp-content/uploads/2020/08/balinese-architecture-temple-house.jpg",
                " https://www.nowbali.co.id/wp-content/uploads/2019/07/Illustration-by-Wayan-Sadha-thumbnail.jpg",
                " https://www.water-sports-bali.com/wp-content/uploads/2021/03/Batuan-Village-Traditional-Balinese-Houses-Twitter.jpg",
                " https://static.wixstatic.com/media/ed8b62_3e76f8dcbbf34f3ca5e0cf7c75dbdae6~mv2.png/v1/fill/w_560",
                "h_432",
                "al_c",
                "usm_0.66_1.00_0.01",
                "enc_auto/ed8b62_3e76f8dcbbf34f3ca5e0cf7c75dbdae6~mv2.png"
            ],
            "id": 57,
            "name": "Arty and traditional balinese house",
            "latitude": "-8.670130803788382",
            "longitude": "115.16006998307591",
            "neighborhood": "North Kuta",
            "hotel_star": "4.5",
            "price_per_night": 100,
            "free_refund": false,
            "nearby_destination": 1,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": false,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "mall",
                " botanical",
                " historical"
            ],
            "image_links": [
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/278479400.jpg?k=f15cdcb634cb46e6da0a00d9020670149ba34a5e2d91e70b9f981c6741af7294&o=&hp=1",
                " https://pix10.agoda.net/hotelImages/2990185/0/2e8aa3f5d306e9a38ec0f71780ec761a.jpg?ca=0&ce=1&s=1024x768",
                " https://pix10.agoda.net/hotelImages/299/2990185/2990185_17112613120059867705.jpg?ca=6&ce=1&s=1024x768",
                " https://pix10.agoda.net/hotelImages/2990185/0/873afd6acb81c8d6ec4782a5a8109aa2.jpg?ca=0&ce=1&s=1024x768",
                " https://pix10.agoda.net/hotelImages/13541192/0/6ea48e4d71d9c0a4ea7690eeede20fa1.jpg?ca=13&ce=1&s=1024x768"
            ],
            "id": 64,
            "name": "ChitraVillaBali 2 BDR with Private Pool - Seminyak",
            "latitude": "-8.673201144794422",
            "longitude": "115.17431809075772",
            "neighborhood": "North Kuta",
            "hotel_star": "5.0",
            "price_per_night": 113,
            "free_refund": false,
            "nearby_destination": 4,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "culinary"
            ],
            "image_links": [
                "https://cf.bstatic.com/xdata/images/hotel/max500/258456386.jpg?k=0634f0acceb7f365f806df9e5a244ff680aca199847bf263a0563e3c2ee39350&o=&hp=1",
                " https://cf.bstatic.com/xdata/images/hotel/max1024x768/258516254.jpg?k=f698ed5115bd008260c7ae6098996a289679d9d81704463c7b475fdbfd06d145&o=&hp=1",
                " https://cf.bstatic.com/xdata/images/hotel/max1280x900/232055447.jpg?k=3e6a21e13cf9fd0662e7289a881eeafdca7db2a04bff90cae3313718db56dcbc&o=&hp=1",
                " https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-o/1b/6f/a7/41/swimmingpool.jpg",
                " https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-o/1b/2d/a7/f1/5908561.jpg"
            ],
            "id": 79,
            "name": "La Cama Bingin, Bali - Yatemar",
            "latitude": "-8.810045202445002",
            "longitude": "115.11427737074813",
            "neighborhood": "South Kuta/Bukit Peninsula",
            "hotel_star": "5.0",
            "price_per_night": 14,
            "free_refund": false,
            "nearby_destination": 1,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": false,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": true,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 0
            }
        ]
    }
```
- List Hotel By Rating
>https://hotel-test-ywu6raktuq-uc.a.run.app/hotel/number

- Path
>hotel/number

- Required
>rating = [interger]
    
- Example request
>curl --location --request GET 'https://hotel-test-ywu6raktuq-uc.a.run.app/hotel/5'

This endpoint is mainly to get the rating recommendation of users.
```javascript
{
    "message": "Success",
    "data": [
        {
            "type_nearby_destination": [
                "family park",
                " botanical"
            ],
            "image_links": [
                "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/62/d3/ff.jpg",
                " https://media-cdn.tripadvisor.com/media/vr-splice-j/03/5c/32/76.jpg",
                " https://media-cdn.tripadvisor.com/media/vr-splice-j/03/5c/32/d3.jpg",
                " https://media-cdn.tripadvisor.com/media/vr-splice-j/03/5c/33/2d.jpg",
                " https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/59560252.jpg?k=4f58bd80c52da6a0db7482fac8c83572a180b36173856c6850b551325a77ae88&o="
            ],
            "id": 1,
            "name": "Bunga Neil Villa -  3 Bedrooms - Seminyak",
            "latitude": "-8.685924978406074",
            "longitude": "115.16562524113574",
            "neighborhood": "Seminyak",
            "hotel_star": "5.0",
            "price_per_night": 191,
            "free_refund": false,
            "nearby_destination": 2,
            "breakfast": true,
            "pool": false,
            "wifi": false,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": true,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "historical"
            ],
            "image_links": [
                "https://images.squarespace-cdn.com/content/v1/57b5ffb16b8f5b060338d2c3/1540365026566-2TFPU39NUU9YHAXZNZMV/untitled-8915.jpg?format=1000w",
                " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHMBnL7Q5gsJY8bIX0vGJoG6k2XLpUJ3SFVpw_V21jGPYTSMrFThEipmaVkbx-7kys7ec&usqp=CAU",
                " https://images.squarespace-cdn.com/content/v1/57b5ffb16b8f5b060338d2c3/1479811522485-3VZBP1OXCIWTU3NK8YG2/tg.jpg?format=1500w",
                " https://images.squarespace-cdn.com/content/v1/57b5ffb16b8f5b060338d2c3/1471871042460-CXD63F4HY2MK4DYFF1FO/image-asset.jpeg?format=1000w",
                " https://images.squarespace-cdn.com/content/v1/57b5ffb16b8f5b060338d2c3/1543108158985-IYHFOJQHI6O0O7T31EGZ/untitled-0341.jpg?format=1000w"
            ],
            "id": 3,
            "name": "Trinity Gardens - Wild and Beautiful",
            "latitude": "-8.498648186564072",
            "longitude": "115.25914837869784",
            "neighborhood": "Ubud",
            "hotel_star": "5.0",
            "price_per_night": 134,
            "free_refund": false,
            "nearby_destination": 1,
            "breakfast": true,
            "pool": true,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": false,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "sport",
                " zoo",
                " historical"
            ],
            "image_links": [
                "https://indonesia.tripcanvas.co/wp-content/uploads/2016/06/2-3-via-suse_cologne.jpg",
                " https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000177-800x533-FIT_AND_TRIM-d543df440b2e98cd67099e123de411a0.jpeg?_src=imagekit&tr=c-at_max",
                "h-488",
                "q-40",
                "w-768",
                " https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000227-66a1d26576e28e469b021ff648b76af6.jpeg?_src=imagekit&tr=c-at_max",
                "h-488",
                "q-40",
                "w-768",
                " https://img.traveltriangle.com/blog/wp-content/uploads/2014/11/Karma-Kandara1.jpg",
                " https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20056290-8ab1e8ba237bb4ab4eeb98345261d09e.jpeg?_src=imagekit&tr=c-at_max",
                "h-488",
                "q-40",
                "w-768"
            ],
            "id": 4,
            "name": "Romantic Retreat Nature View Umalas",
            "latitude": "-8.665436634983566",
            "longitude": "115.16407590794638",
            "neighborhood": "North Kuta",
            "hotel_star": "5.0",
            "price_per_night": 118,
            "free_refund": false,
            "nearby_destination": 4,
            "breakfast": false,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": false,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": true,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "culinary",
                " mall",
                " botanical",
                " historical"
            ],
            "image_links": [
                "https://s3.ap-southeast-2.amazonaws.com/thebalibible.com/uploads/images/venue/594039e685ffcf9bdab11baaff970a14.jpg?v=1",
                " https://pix10.agoda.net/hotelImages/474386/-1/c08b97d6183862230531a97a39f9d8b0.jpg?ca=9&ce=1&s=1024x768",
                " https://www.ubud-villas.com/wp-content/uploads/2021/10/Villa-Hijau_Feature.jpg",
                " https://cf.bstatic.com/xdata/images/hotel/max1280x900/161708562.jpg?k=5454bd2da0494840970988b976c80e89033e795e58b8d85324db3dffa5441055&o=&hp=1",
                " https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/102636121.jpg?k=9d9bb609f20a1ef1e5fe01541db64dc064e24c1800a60dc55917cb9d191d29ab&o="
            ],
            "id": 5,
            "name": "Villa Hijau - Peace and tranquility.",
            "latitude": "-8.500065498130304",
            "longitude": "115.25048098974094",
            "neighborhood": "Ubud",
            "hotel_star": "5.0",
            "price_per_night": 81,
            "free_refund": false,
            "nearby_destination": 5,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": false,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": true,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "family park",
                " culinary",
                " historical"
            ],
            "image_links": [
                "https://pix10.agoda.net/hotelImages/119/1195651/1195651_17092813340056887167.jpg?ca=6&ce=1&s=1024x768",
                " https://pix10.agoda.net/hotelImages/119/1195651/1195651_16110313120048386478.jpg?ca=6&ce=1&s=1024x768",
                " https://q-xx.bstatic.com/xdata/images/hotel/840x460/245394467.jpg?k=88b546a472cc64b7170685b7cb0c9194ddbb10fa55380bb7c3ad16f6ec78cc41&o=",
                " https://pix10.agoda.net/hotelImages/4643527/-1/f3e169aea00c76fe4895bacdd4983653.jpg?ca=9&ce=1&s=1024x768",
                " https://pix10.agoda.net/hotelImages/569/569796/569796_14030509010018550993.jpg?ca=2&ce=1&s=1024x768"
            ],
            "id": 8,
            "name": "Ideal Young Family / Couple house GIANT Pool Sanur",
            "latitude": "-8.692751600212219",
            "longitude": "115.25938325148783",
            "neighborhood": "Sanur",
            "hotel_star": "5.0",
            "price_per_night": 56,
            "free_refund": false,
            "nearby_destination": 3,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": true,
            "staff_vaccinated": true,
            "child_area": true,
            "price_category": 1
        },
        {
            "type_nearby_destination": [
                "mall",
                " zoo",
                " botanical",
                " historical"
            ],
            "image_links": [
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/281375126.jpg?k=4cece1385abeaba117b036edcfb3e6400116c999a4f3959dfcf5b3fe1777e341&o=&hp=1",
                " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/9f/d1/d4/amazing-and-wonderful.jpg?w=900&h=-1&s=1",
                " https://www.ministryofvillas.com/wp-content/uploads/2012/11/bali-latalianavilla-02-800x530.jpg",
                " https://i.pinimg.com/736x/2e/e2/32/2ee23278508f8ebc1b1fd1d1acadc676.jpg",
                " https://pix10.agoda.net/hotelImages/276948/-1/fc0be78fcc6b7eedf9aeb59ab1f660b4.jpg?ca=10&ce=1&s=1024x768"
            ],
            "id": 11,
            "name": "❤PROMO❤ Little Balinese Open Villa!!",
            "latitude": "-8.713859330790827",
            "longitude": "115.17517877474460",
            "neighborhood": "Kuta Village",
            "hotel_star": "5.0",
            "price_per_night": 37,
            "free_refund": false,
            "nearby_destination": 4,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": false,
            "air_conditioner": true,
            "wheelchair_access": true,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 1
        },
        {
            "type_nearby_destination": [
                "family park",
                " zoo"
            ],
            "image_links": [
                "https://a0.muscache.com/im/pictures/a63b7c96-5e6f-46e6-aa6b-499d29fc1562.jpg?im_w=720",
                " https://www.vilondo.com/wp-content/uploads/2018/11/bali-bersantaivillas-villasinta-02-800x530.jpg",
                " https://images.squarespace-cdn.com/content/v1/575e2af0859fd02bebd297c7/1465858240068-DM39D4C0GVOMSEAN0N0Y/image-asset.jpeg?format=1000w",
                " https://www.ministryofvillas.com/wp-content/uploads/2016/08/bali-bersantaivillas-villasinta-05.jpg",
                " https://pix10.agoda.net/hotelImages/127/1270498/1270498_16121509280049686297.jpg?ca=6&ce=1&s=1024x768"
            ],
            "id": 13,
            "name": "VILLA SINTA NUSA LEMBONGAN ISLAND, BALI- 1 Bedroom",
            "latitude": "-8.680133668831807",
            "longitude": "115.44495931906329",
            "neighborhood": "Nusa Lembongan/Nusa Ceningan",
            "hotel_star": "5.0",
            "price_per_night": 159,
            "free_refund": false,
            "nearby_destination": 2,
            "breakfast": false,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": true,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "mall"
            ],
            "image_links": [
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/347040434.jpg?k=4034474c50da63ded3618e25f86ea6b7aa215b39e226afc6721fe83d115b81d9&o=&hp=1",
                " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3PFIsbFvR20YMJtY2sx15U7Ct1HrEc9coHBHHxYvSEkxYMLbCdvs26eJHZYTnIK5vBSA&usqp=CAU",
                " https://cf.bstatic.com/xdata/images/hotel/max500/325514444.jpg?k=8736766c36f9114c6cb11b5ff77645c661e198ef2f0887190daebc2dc4dda88e&o=&hp=1",
                " https://indonesiaexpat.id/wp-content/uploads/2020/09/Indonesia-Expat-JPEG-Di-Indonesia-Aja-flyer-1-scaled-e1600350585777.jpg",
                " https://indonesiaexpat.id/wp-content/uploads/2020/05/TIJILI-e1590149474772.jpeg"
            ],
            "id": 14,
            "name": "PROMO 10%off published Day Rate April, May, & June",
            "latitude": "-8.679034712625217",
            "longitude": "115.16349867297534",
            "neighborhood": "Seminyak",
            "hotel_star": "5.0",
            "price_per_night": 125,
            "free_refund": false,
            "nearby_destination": 1,
            "breakfast": false,
            "pool": true,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": true,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "botanical"
            ],
            "image_links": [
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/36057502.jpg?k=17285ebdaf64fa436a748d639b40274cb20e8150ffdd335eaf28a0baf4598b83&o=&hp=1",
                " https://cf.bstatic.com/xdata/images/hotel/max1024x768/100354372.jpg?k=6fa862e8e1f0134b83e189aa63507de0317246b14e8a2d6bfb2b8dd0df5aef84&o=&hp=1",
                " https://yomavillasbali.com/wp-content/uploads/2016/09/Yoma-Villas-Bali-Luxury-Accommodation-Villa-Batur-Gallery-13.jpg",
                " https://cf.bstatic.com/xdata/images/hotel/max1280x900/33256054.jpg?k=9db8a051b075ab4b7b36937d098d9e59a3353bef16ece8446f584505adccce6a&o=&hp=1",
                " https://cf.bstatic.com/xdata/images/hotel/max500/240326281.jpg?k=67ea352e72c793ca1fc4fd44352f48ca2a0c491dcecb950ce8d796be69e640c8&o=&hp=1"
            ],
            "id": 15,
            "name": "Yoma Villas Bali - Villa Batur 3 bedroom",
            "latitude": "-8.641679783016158",
            "longitude": "115.13408163470034",
            "neighborhood": "Canggu",
            "hotel_star": "5.0",
            "price_per_night": 185,
            "free_refund": false,
            "nearby_destination": 1,
            "breakfast": false,
            "pool": false,
            "wifi": false,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "sport",
                " zoo",
                " mall"
            ],
            "image_links": [
                "https://images.squarespace-cdn.com/content/v1/5feb7772dcac5279f756c909/db08b3a3-dbcf-407c-9040-f9aadbf42eb6/23.jpg",
                " https://www.theluxurybali.com/wp-content/uploads/2016/07/1-or-2-Bedroom-Pool-Villa1-660x440.jpg",
                " https://q-xx.bstatic.com/xdata/images/hotel/840x460/272688877.jpg?k=7b847fc976d2f594455dd2ccd737d28e8f0dcb205fd2a431cb72e10a45255737&o=",
                " https://www.theluxurybali.com/wp-content/uploads/2015/04/The-Istana-Pool-1.jpg",
                " https://q-xx.bstatic.com/xdata/images/hotel/840x460/272689279.jpg?k=0e7e761b575249d1614e3021c3584c60383900613de5c6bf44ffa0a5a6624650&o="
            ],
            "id": 16,
            "name": "Private Luxury, 2 bedroom Villa, in Canggu",
            "latitude": "-8.668900757522296",
            "longitude": "115.14791089797410",
            "neighborhood": "Canggu",
            "hotel_star": "5.0",
            "price_per_night": 206,
            "free_refund": false,
            "nearby_destination": 4,
            "breakfast": true,
            "pool": true,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
            }
        ]
    }
```

- List Hotel By Trending
>https://hotel-test-ywu6raktuq-uc.a.run.app/hotel/number

- Required
>hotel/interger

- Example Request
>curl --location --request GET 'https://hotel-test-ywu6raktuq-uc.a.run.app/hotel/5'

This endpoint is mainly to get the rating recommendation of users.
```javascript
{
    "message": "Success",
    "data": [
        {
            "type_nearby_destination": [
                "family park",
                " botanical"
            ],
            "image_links": [
                "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/62/d3/ff.jpg",
                " https://media-cdn.tripadvisor.com/media/vr-splice-j/03/5c/32/76.jpg",
                " https://media-cdn.tripadvisor.com/media/vr-splice-j/03/5c/32/d3.jpg",
                " https://media-cdn.tripadvisor.com/media/vr-splice-j/03/5c/33/2d.jpg",
                " https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/59560252.jpg?k=4f58bd80c52da6a0db7482fac8c83572a180b36173856c6850b551325a77ae88&o="
            ],
            "id": 1,
            "name": "Bunga Neil Villa -  3 Bedrooms - Seminyak",
            "latitude": "-8.685924978406074",
            "longitude": "115.16562524113574",
            "neighborhood": "Seminyak",
            "hotel_star": "5.0",
            "price_per_night": 191,
            "free_refund": false,
            "nearby_destination": 2,
            "breakfast": true,
            "pool": false,
            "wifi": false,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": true,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "historical"
            ],
            "image_links": [
                "https://images.squarespace-cdn.com/content/v1/57b5ffb16b8f5b060338d2c3/1540365026566-2TFPU39NUU9YHAXZNZMV/untitled-8915.jpg?format=1000w",
                " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHMBnL7Q5gsJY8bIX0vGJoG6k2XLpUJ3SFVpw_V21jGPYTSMrFThEipmaVkbx-7kys7ec&usqp=CAU",
                " https://images.squarespace-cdn.com/content/v1/57b5ffb16b8f5b060338d2c3/1479811522485-3VZBP1OXCIWTU3NK8YG2/tg.jpg?format=1500w",
                " https://images.squarespace-cdn.com/content/v1/57b5ffb16b8f5b060338d2c3/1471871042460-CXD63F4HY2MK4DYFF1FO/image-asset.jpeg?format=1000w",
                " https://images.squarespace-cdn.com/content/v1/57b5ffb16b8f5b060338d2c3/1543108158985-IYHFOJQHI6O0O7T31EGZ/untitled-0341.jpg?format=1000w"
            ],
            "id": 3,
            "name": "Trinity Gardens - Wild and Beautiful",
            "latitude": "-8.498648186564072",
            "longitude": "115.25914837869784",
            "neighborhood": "Ubud",
            "hotel_star": "5.0",
            "price_per_night": 134,
            "free_refund": false,
            "nearby_destination": 1,
            "breakfast": true,
            "pool": true,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": false,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "sport",
                " zoo",
                " historical"
            ],
            "image_links": [
                "https://indonesia.tripcanvas.co/wp-content/uploads/2016/06/2-3-via-suse_cologne.jpg",
                " https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000177-800x533-FIT_AND_TRIM-d543df440b2e98cd67099e123de411a0.jpeg?_src=imagekit&tr=c-at_max",
                "h-488",
                "q-40",
                "w-768",
                " https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000227-66a1d26576e28e469b021ff648b76af6.jpeg?_src=imagekit&tr=c-at_max",
                "h-488",
                "q-40",
                "w-768",
                " https://img.traveltriangle.com/blog/wp-content/uploads/2014/11/Karma-Kandara1.jpg",
                " https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20056290-8ab1e8ba237bb4ab4eeb98345261d09e.jpeg?_src=imagekit&tr=c-at_max",
                "h-488",
                "q-40",
                "w-768"
            ],
            "id": 4,
            "name": "Romantic Retreat Nature View Umalas",
            "latitude": "-8.665436634983566",
            "longitude": "115.16407590794638",
            "neighborhood": "North Kuta",
            "hotel_star": "5.0",
            "price_per_night": 118,
            "free_refund": false,
            "nearby_destination": 4,
            "breakfast": false,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": false,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": true,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "culinary",
                " mall",
                " botanical",
                " historical"
            ],
            "image_links": [
                "https://s3.ap-southeast-2.amazonaws.com/thebalibible.com/uploads/images/venue/594039e685ffcf9bdab11baaff970a14.jpg?v=1",
                " https://pix10.agoda.net/hotelImages/474386/-1/c08b97d6183862230531a97a39f9d8b0.jpg?ca=9&ce=1&s=1024x768",
                " https://www.ubud-villas.com/wp-content/uploads/2021/10/Villa-Hijau_Feature.jpg",
                " https://cf.bstatic.com/xdata/images/hotel/max1280x900/161708562.jpg?k=5454bd2da0494840970988b976c80e89033e795e58b8d85324db3dffa5441055&o=&hp=1",
                " https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/102636121.jpg?k=9d9bb609f20a1ef1e5fe01541db64dc064e24c1800a60dc55917cb9d191d29ab&o="
            ],
            "id": 5,
            "name": "Villa Hijau - Peace and tranquility.",
            "latitude": "-8.500065498130304",
            "longitude": "115.25048098974094",
            "neighborhood": "Ubud",
            "hotel_star": "5.0",
            "price_per_night": 81,
            "free_refund": false,
            "nearby_destination": 5,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": false,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": true,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "family park",
                " culinary",
                " historical"
            ],
            "image_links": [
                "https://pix10.agoda.net/hotelImages/119/1195651/1195651_17092813340056887167.jpg?ca=6&ce=1&s=1024x768",
                " https://pix10.agoda.net/hotelImages/119/1195651/1195651_16110313120048386478.jpg?ca=6&ce=1&s=1024x768",
                " https://q-xx.bstatic.com/xdata/images/hotel/840x460/245394467.jpg?k=88b546a472cc64b7170685b7cb0c9194ddbb10fa55380bb7c3ad16f6ec78cc41&o=",
                " https://pix10.agoda.net/hotelImages/4643527/-1/f3e169aea00c76fe4895bacdd4983653.jpg?ca=9&ce=1&s=1024x768",
                " https://pix10.agoda.net/hotelImages/569/569796/569796_14030509010018550993.jpg?ca=2&ce=1&s=1024x768"
            ],
            "id": 8,
            "name": "Ideal Young Family / Couple house GIANT Pool Sanur",
            "latitude": "-8.692751600212219",
            "longitude": "115.25938325148783",
            "neighborhood": "Sanur",
            "hotel_star": "5.0",
            "price_per_night": 56,
            "free_refund": false,
            "nearby_destination": 3,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": true,
            "staff_vaccinated": true,
            "child_area": true,
            "price_category": 1
        },
        {
            "type_nearby_destination": [
                "mall",
                " zoo",
                " botanical",
                " historical"
            ],
            "image_links": [
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/281375126.jpg?k=4cece1385abeaba117b036edcfb3e6400116c999a4f3959dfcf5b3fe1777e341&o=&hp=1",
                " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/9f/d1/d4/amazing-and-wonderful.jpg?w=900&h=-1&s=1",
                " https://www.ministryofvillas.com/wp-content/uploads/2012/11/bali-latalianavilla-02-800x530.jpg",
                " https://i.pinimg.com/736x/2e/e2/32/2ee23278508f8ebc1b1fd1d1acadc676.jpg",
                " https://pix10.agoda.net/hotelImages/276948/-1/fc0be78fcc6b7eedf9aeb59ab1f660b4.jpg?ca=10&ce=1&s=1024x768"
            ],
            "id": 11,
            "name": "❤PROMO❤ Little Balinese Open Villa!!",
            "latitude": "-8.713859330790827",
            "longitude": "115.17517877474460",
            "neighborhood": "Kuta Village",
            "hotel_star": "5.0",
            "price_per_night": 37,
            "free_refund": false,
            "nearby_destination": 4,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": false,
            "air_conditioner": true,
            "wheelchair_access": true,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 1
        },
        {
            "type_nearby_destination": [
                "family park",
                " zoo"
            ],
            "image_links": [
                "https://a0.muscache.com/im/pictures/a63b7c96-5e6f-46e6-aa6b-499d29fc1562.jpg?im_w=720",
                " https://www.vilondo.com/wp-content/uploads/2018/11/bali-bersantaivillas-villasinta-02-800x530.jpg",
                " https://images.squarespace-cdn.com/content/v1/575e2af0859fd02bebd297c7/1465858240068-DM39D4C0GVOMSEAN0N0Y/image-asset.jpeg?format=1000w",
                " https://www.ministryofvillas.com/wp-content/uploads/2016/08/bali-bersantaivillas-villasinta-05.jpg",
                " https://pix10.agoda.net/hotelImages/127/1270498/1270498_16121509280049686297.jpg?ca=6&ce=1&s=1024x768"
            ],
            "id": 13,
            "name": "VILLA SINTA NUSA LEMBONGAN ISLAND, BALI- 1 Bedroom",
            "latitude": "-8.680133668831807",
            "longitude": "115.44495931906329",
            "neighborhood": "Nusa Lembongan/Nusa Ceningan",
            "hotel_star": "5.0",
            "price_per_night": 159,
            "free_refund": false,
            "nearby_destination": 2,
            "breakfast": false,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": true,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "mall"
            ],
            "image_links": [
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/347040434.jpg?k=4034474c50da63ded3618e25f86ea6b7aa215b39e226afc6721fe83d115b81d9&o=&hp=1",
                " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3PFIsbFvR20YMJtY2sx15U7Ct1HrEc9coHBHHxYvSEkxYMLbCdvs26eJHZYTnIK5vBSA&usqp=CAU",
                " https://cf.bstatic.com/xdata/images/hotel/max500/325514444.jpg?k=8736766c36f9114c6cb11b5ff77645c661e198ef2f0887190daebc2dc4dda88e&o=&hp=1",
                " https://indonesiaexpat.id/wp-content/uploads/2020/09/Indonesia-Expat-JPEG-Di-Indonesia-Aja-flyer-1-scaled-e1600350585777.jpg",
                " https://indonesiaexpat.id/wp-content/uploads/2020/05/TIJILI-e1590149474772.jpeg"
            ],
            "id": 14,
            "name": "PROMO 10%off published Day Rate April, May, & June",
            "latitude": "-8.679034712625217",
            "longitude": "115.16349867297534",
            "neighborhood": "Seminyak",
            "hotel_star": "5.0",
            "price_per_night": 125,
            "free_refund": false,
            "nearby_destination": 1,
            "breakfast": false,
            "pool": true,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": true,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "botanical"
            ],
            "image_links": [
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/36057502.jpg?k=17285ebdaf64fa436a748d639b40274cb20e8150ffdd335eaf28a0baf4598b83&o=&hp=1",
                " https://cf.bstatic.com/xdata/images/hotel/max1024x768/100354372.jpg?k=6fa862e8e1f0134b83e189aa63507de0317246b14e8a2d6bfb2b8dd0df5aef84&o=&hp=1",
                " https://yomavillasbali.com/wp-content/uploads/2016/09/Yoma-Villas-Bali-Luxury-Accommodation-Villa-Batur-Gallery-13.jpg",
                " https://cf.bstatic.com/xdata/images/hotel/max1280x900/33256054.jpg?k=9db8a051b075ab4b7b36937d098d9e59a3353bef16ece8446f584505adccce6a&o=&hp=1",
                " https://cf.bstatic.com/xdata/images/hotel/max500/240326281.jpg?k=67ea352e72c793ca1fc4fd44352f48ca2a0c491dcecb950ce8d796be69e640c8&o=&hp=1"
            ],
            "id": 15,
            "name": "Yoma Villas Bali - Villa Batur 3 bedroom",
            "latitude": "-8.641679783016158",
            "longitude": "115.13408163470034",
            "neighborhood": "Canggu",
            "hotel_star": "5.0",
            "price_per_night": 185,
            "free_refund": false,
            "nearby_destination": 1,
            "breakfast": false,
            "pool": false,
            "wifi": false,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "sport",
                " zoo",
                " mall"
            ],
            "image_links": [
                "https://images.squarespace-cdn.com/content/v1/5feb7772dcac5279f756c909/db08b3a3-dbcf-407c-9040-f9aadbf42eb6/23.jpg",
                " https://www.theluxurybali.com/wp-content/uploads/2016/07/1-or-2-Bedroom-Pool-Villa1-660x440.jpg",
                " https://q-xx.bstatic.com/xdata/images/hotel/840x460/272688877.jpg?k=7b847fc976d2f594455dd2ccd737d28e8f0dcb205fd2a431cb72e10a45255737&o=",
                " https://www.theluxurybali.com/wp-content/uploads/2015/04/The-Istana-Pool-1.jpg",
                " https://q-xx.bstatic.com/xdata/images/hotel/840x460/272689279.jpg?k=0e7e761b575249d1614e3021c3584c60383900613de5c6bf44ffa0a5a6624650&o="
            ],
            "id": 16,
            "name": "Private Luxury, 2 bedroom Villa, in Canggu",
            "latitude": "-8.668900757522296",
            "longitude": "115.14791089797410",
            "neighborhood": "Canggu",
            "hotel_star": "5.0",
            "price_per_night": 206,
            "free_refund": false,
            "nearby_destination": 4,
            "breakfast": true,
            "pool": true,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
            }
        ]
    }
```
- list hotel by Trending
>https://hotel-test-ywu6raktuq-uc.a.run.app/trending/?page=number&offset=number
- Path
>trending/?page=number&offset=number
- required
>page=[interger]& offset=[interger]

- Example request
>https://hotel-test-ywu6raktuq-uc.a.run.app/trending/?page=10&offset=0

This endpoint is to get the hotels that are trending or popular
```javascript
{
    "message": "Success",
    "data": [
        {
            "type_nearby_destination": [
                "family park",
                " botanical"
            ],
            "image_links": [
                "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/62/d3/ff.jpg",
                " https://media-cdn.tripadvisor.com/media/vr-splice-j/03/5c/32/76.jpg",
                " https://media-cdn.tripadvisor.com/media/vr-splice-j/03/5c/32/d3.jpg",
                " https://media-cdn.tripadvisor.com/media/vr-splice-j/03/5c/33/2d.jpg",
                " https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/59560252.jpg?k=4f58bd80c52da6a0db7482fac8c83572a180b36173856c6850b551325a77ae88&o="
            ],
            "id": 1,
            "name": "Bunga Neil Villa -  3 Bedrooms - Seminyak",
            "latitude": "-8.685924978406074",
            "longitude": "115.16562524113574",
            "neighborhood": "Seminyak",
            "hotel_star": "5.0",
            "price_per_night": 191,
            "free_refund": false,
            "nearby_destination": 2,
            "breakfast": true,
            "pool": false,
            "wifi": false,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": true,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "family park",
                " mall"
            ],
            "image_links": [
                "https://q-xx.bstatic.com/xdata/images/hotel/840x460/314956872.jpg?k=6ad18f6ddeb23fdec75d3ecfeaf9f3bd97325b120cb56c26424106ae6363553c&o=",
                " https://q-xx.bstatic.com/xdata/images/hotel/840x460/301041590.jpg?k=a296ab28fa424c940db653ac19556049b45024137e1cf86ba6fd2f4a05157b9d&o=",
                " https://cf.bstatic.com/xdata/images/hotel/max1280x900/78603244.jpg?k=afcd3a6144004b3ef46195d251b76c56bb41007038883ff106f28342f8e8d7f2&o=&hp=1",
                " https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/03/12/a861bae4-65e3-4e37-9b69-52a2b6eabb12-1615562790377-88c9381d81aa5069ad0df8edb9671aec.jpg",
                " https://apollo-singapore.akamaized.net/v1/files/4nppaofhi5bd2-ID/image;s=850x0"
            ],
            "id": 2,
            "name": "M2 Villa - 5 Bedrooms - Seminyak",
            "latitude": "-8.693696885672502",
            "longitude": "115.17636248858744",
            "neighborhood": "Seminyak",
            "hotel_star": "4.5",
            "price_per_night": 258,
            "free_refund": false,
            "nearby_destination": 2,
            "breakfast": false,
            "pool": false,
            "wifi": false,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "historical"
            ],
            "image_links": [
                "https://images.squarespace-cdn.com/content/v1/57b5ffb16b8f5b060338d2c3/1540365026566-2TFPU39NUU9YHAXZNZMV/untitled-8915.jpg?format=1000w",
                " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHMBnL7Q5gsJY8bIX0vGJoG6k2XLpUJ3SFVpw_V21jGPYTSMrFThEipmaVkbx-7kys7ec&usqp=CAU",
                " https://images.squarespace-cdn.com/content/v1/57b5ffb16b8f5b060338d2c3/1479811522485-3VZBP1OXCIWTU3NK8YG2/tg.jpg?format=1500w",
                " https://images.squarespace-cdn.com/content/v1/57b5ffb16b8f5b060338d2c3/1471871042460-CXD63F4HY2MK4DYFF1FO/image-asset.jpeg?format=1000w",
                " https://images.squarespace-cdn.com/content/v1/57b5ffb16b8f5b060338d2c3/1543108158985-IYHFOJQHI6O0O7T31EGZ/untitled-0341.jpg?format=1000w"
            ],
            "id": 3,
            "name": "Trinity Gardens - Wild and Beautiful",
            "latitude": "-8.498648186564072",
            "longitude": "115.25914837869784",
            "neighborhood": "Ubud",
            "hotel_star": "5.0",
            "price_per_night": 134,
            "free_refund": false,
            "nearby_destination": 1,
            "breakfast": true,
            "pool": true,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": false,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "sport",
                " zoo",
                " historical"
            ],
            "image_links": [
                "https://indonesia.tripcanvas.co/wp-content/uploads/2016/06/2-3-via-suse_cologne.jpg",
                " https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000177-800x533-FIT_AND_TRIM-d543df440b2e98cd67099e123de411a0.jpeg?_src=imagekit&tr=c-at_max",
                "h-488",
                "q-40",
                "w-768",
                " https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000227-66a1d26576e28e469b021ff648b76af6.jpeg?_src=imagekit&tr=c-at_max",
                "h-488",
                "q-40",
                "w-768",
                " https://img.traveltriangle.com/blog/wp-content/uploads/2014/11/Karma-Kandara1.jpg",
                " https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20056290-8ab1e8ba237bb4ab4eeb98345261d09e.jpeg?_src=imagekit&tr=c-at_max",
                "h-488",
                "q-40",
                "w-768"
            ],
            "id": 4,
            "name": "Romantic Retreat Nature View Umalas",
            "latitude": "-8.665436634983566",
            "longitude": "115.16407590794638",
            "neighborhood": "North Kuta",
            "hotel_star": "5.0",
            "price_per_night": 118,
            "free_refund": false,
            "nearby_destination": 4,
            "breakfast": false,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": false,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": true,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "culinary",
                " mall",
                " botanical",
                " historical"
            ],
            "image_links": [
                "https://s3.ap-southeast-2.amazonaws.com/thebalibible.com/uploads/images/venue/594039e685ffcf9bdab11baaff970a14.jpg?v=1",
                " https://pix10.agoda.net/hotelImages/474386/-1/c08b97d6183862230531a97a39f9d8b0.jpg?ca=9&ce=1&s=1024x768",
                " https://www.ubud-villas.com/wp-content/uploads/2021/10/Villa-Hijau_Feature.jpg",
                " https://cf.bstatic.com/xdata/images/hotel/max1280x900/161708562.jpg?k=5454bd2da0494840970988b976c80e89033e795e58b8d85324db3dffa5441055&o=&hp=1",
                " https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/102636121.jpg?k=9d9bb609f20a1ef1e5fe01541db64dc064e24c1800a60dc55917cb9d191d29ab&o="
            ],
            "id": 5,
            "name": "Villa Hijau - Peace and tranquility.",
            "latitude": "-8.500065498130304",
            "longitude": "115.25048098974094",
            "neighborhood": "Ubud",
            "hotel_star": "5.0",
            "price_per_night": 81,
            "free_refund": false,
            "nearby_destination": 5,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": false,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": true,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "zoo"
            ],
            "image_links": [
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/347027067.jpg?k=f4fc09bf760d47050f498501459efaf2e8e5f802cb65137425aad00ad76734b6&o=&hp=1",
                " https://cf.bstatic.com/xdata/images/hotel/max1024x768/350202878.jpg?k=a922e546b808d3c5e30b6f0068307d1cbe861efe14bb29ef764012f121cdf4dd&o=&hp=1",
                " https://media-cdn.tripadvisor.com/media/photo-m/1280/14/ce/46/8b/bloom-villas-near-to.jpg",
                " https://q-xx.bstatic.com/xdata/images/hotel/max500/255977776.jpg?k=42c66dc43dd0a13c508299da64f6196af7a88d3c27342552f4cf869accf970ca&o=",
                " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/ac/59/a3/getlstd-property-photo.jpg?w=900&h=-1&s=1"
            ],
            "id": 6,
            "name": "Flower Gang Villa",
            "latitude": "-8.690206274969274",
            "longitude": "115.16562087315400",
            "neighborhood": "Seminyak",
            "hotel_star": "4.5",
            "price_per_night": 37,
            "free_refund": false,
            "nearby_destination": 1,
            "breakfast": true,
            "pool": true,
            "wifi": true,
            "parking": false,
            "smoking": true,
            "air_conditioner": false,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 1
        },
        {
            "type_nearby_destination": [
                "family park",
                " botanical"
            ],
            "image_links": [
                "https://cdn.villaway.com/202303/external/5542080da82684589c69fb4e/bg_u089zuiv88_202303.jpg",
                " https://www.letsbookhotel.com/img/max300/728/7280828.jpg",
                " https://q-xx.bstatic.com/xdata/images/hotel/max300/200294860.jpg?k=86ff39758ab945035a20be3a9ba0c18765e1d46bb1d68f388fb7a045b3ffa97c&o=",
                " https://pix10.agoda.net/hotelImages/335/335525/335525_14042117050019143584.jpg?ca=2&ce=1&s=1024x768",
                " https://baliluxuryprivatevillas.com/villas-photo/gallery/177_93740773017.jpg"
            ],
            "id": 7,
            "name": "Villa Umah Kedash Seminyak",
            "latitude": "-8.686692350019259",
            "longitude": "115.16865221221650",
            "neighborhood": "Seminyak",
            "hotel_star": "4.5",
            "price_per_night": 258,
            "free_refund": false,
            "nearby_destination": 3,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "family park",
                " culinary",
                " historical"
            ],
            "image_links": [
                "https://pix10.agoda.net/hotelImages/119/1195651/1195651_17092813340056887167.jpg?ca=6&ce=1&s=1024x768",
                " https://pix10.agoda.net/hotelImages/119/1195651/1195651_16110313120048386478.jpg?ca=6&ce=1&s=1024x768",
                " https://q-xx.bstatic.com/xdata/images/hotel/840x460/245394467.jpg?k=88b546a472cc64b7170685b7cb0c9194ddbb10fa55380bb7c3ad16f6ec78cc41&o=",
                " https://pix10.agoda.net/hotelImages/4643527/-1/f3e169aea00c76fe4895bacdd4983653.jpg?ca=9&ce=1&s=1024x768",
                " https://pix10.agoda.net/hotelImages/569/569796/569796_14030509010018550993.jpg?ca=2&ce=1&s=1024x768"
            ],
            "id": 8,
            "name": "Ideal Young Family / Couple house GIANT Pool Sanur",
            "latitude": "-8.692751600212219",
            "longitude": "115.25938325148783",
            "neighborhood": "Sanur",
            "hotel_star": "5.0",
            "price_per_night": 56,
            "free_refund": false,
            "nearby_destination": 3,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": true,
            "staff_vaccinated": true,
            "child_area": true,
            "price_category": 1
        },
        {
            "type_nearby_destination": [
                "mall",
                " zoo"
            ],
            "image_links": [
                "https://q-xx.bstatic.com/xdata/images/hotel/840x460/191540711.jpg?k=e5a0a37e6f0cf7bf29893b3c6f53452055521924602ff7072cbcee6e6e558294&o=",
                " https://images.squarespace-cdn.com/content/v1/585562bcbe659442d503893f/1491363523070-JNI82HAL7L4NSKS7TDWO/Exotik+Villas+-+Uluwatu+Cliff+Apartment+%288%29.jpg",
                " https://images.squarespace-cdn.com/content/v1/585562bcbe659442d503893f/1491363717053-JAQQEX6QO1YUUVPZRQMJ/Exotik+Villas+-+Uluwatu+Cliff+Apartment+%2810%29.jpg",
                " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLsWDNM5wIJGpDWEHwnIHDYAZnigzucd0sfXJ_1irwu4fnUAafyMEIApt_DA2aRagJrx4&usqp=CAU",
                " https://images.squarespace-cdn.com/content/v1/585562bcbe659442d503893f/1491363019217-YVJPWYIGIIZ8UWMHNCKA/Exotik+Villas+-+Uluwatu+Cliff+Apartment+%2811%29.jpg"
            ],
            "id": 9,
            "name": "Uluwatu Cliff Apartment - 2Br - Ocean View",
            "latitude": "-8.794299625805042",
            "longitude": "115.19936515871792",
            "neighborhood": "South Kuta/Bukit Peninsula",
            "hotel_star": "4.5",
            "price_per_night": 146,
            "free_refund": false,
            "nearby_destination": 2,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": false,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": true,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "sport",
                " zoo"
            ],
            "image_links": [
                "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/116178358.jpg?k=868ee88ea6c6df2e81c3d179b58ab1934a09414952b517d854a4c319f965b411&o=",
                " https://q-xx.bstatic.com/xdata/images/hotel/max500/116178399.jpg?k=534e2d27903770dbc838a2858f28a15f840afbd6bd8f7e02894d35109c98ae1d&o=",
                " https://p.bookcdn.com/data/Photos/320x200/4417/441775/441775890/Mesari-Sikih-At-Villa-Moyo-Umalas-photos-Exterior-Hotel-information.JPEG",
                " https://p.bookcdn.com/data/Photos/320x200/4417/441782/441782127/Mesari-Sikih-At-Villa-Moyo-Umalas-photos-Exterior-Hotel-information.JPEG",
                " https://p.bookcdn.com/data/Photos/320x200/4417/441778/441778260/Mesari-Sikih-At-Villa-Moyo-Umalas-photos-Exterior-Hotel-information.JPEG"
            ],
            "id": 10,
            "name": "Mesari Sikih at Villa Moyo Umalas, North Kuta",
            "latitude": "-8.655730946416560",
            "longitude": "115.15413980891144",
            "neighborhood": "North Kuta",
            "hotel_star": "4.5",
            "price_per_night": 262,
            "free_refund": false,
            "nearby_destination": 2,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
            }
        ]
    }
```
- Get The Details of one hotel
- Base URL
>https://hotel-test-ywu6raktuq-uc.a.run.app

- Method
><Code><font color="yellow">POST</font></Code>

- One Hotel Detail
>https://hotel-test-ywu6raktuq-uc.a.run.app/hotel/details/number

- Required
>/[interger]

- Example Request
>curl --location --request POST 'https://hotel-test-ywu6raktuq-uc.a.run.app/hotel/details/50'

This endpoint is to get the details of one hotel.
```javascript
{
    "message": "Success",
    "data": {
        "type_nearby_destination": [
            "sport",
            " zoo",
            " botanical"
        ],
        "image_links": [
            "https://temukuubud.com/wp-content/uploads/2020/05/temuku-ubud-sunrise-rice-fields-villa-evening.jpg",
            " https://cf.bstatic.com/xdata/images/hotel/max1280x900/176301474.jpg?k=e7d55bfa2d3ef99037292b9874740080d50f4127ca89f79df197e4a3717e5d07&o=&hp=1",
            " https://cf.bstatic.com/xdata/images/hotel/max1024x768/49262016.jpg?k=9da025acb27df1524384798982e549b7d31f8489fe298cc36d98632c21f62fcf&o=&hp=1",
            " https://pix10.agoda.net/hotelImages/248/248454/248454_15060711240028766227.jpg?ca=4&ce=1&s=1024x768",
            " https://cf.bstatic.com/xdata/images/hotel/max1024x768/247300040.jpg?k=350a40007da88a4e607af7d543abe43d8161b3b261b7ac15fb9c394a3b77367f&o=&hp=1"
        ],
        "id": 50,
        "name": "Greenfields view 2story home with pool & motorbike",
        "latitude": "-8.496144180816607",
        "longitude": "115.28302553432192",
        "neighborhood": "Ubud",
        "hotel_star": "5.0",
        "price_per_night": 122,
        "free_refund": false,
        "nearby_destination": 4,
        "breakfast": true,
        "pool": true,
        "wifi": true,
        "parking": true,
        "smoking": true,
        "air_conditioner": true,
        "wheelchair_access": false,
        "average_bed_size": false,
        "staff_vaccinated": true,
        "child_area": false,
        "price_category": 2
        }
    }
```
- User Recommendation
>https://hotel-test-ywu6raktuq-uc.a.run.app/user-recommendation/number

- Required
>/[interger]

- Example Request
>curl --location --request POST 'https://hotel-test-ywu6raktuq-uc.a.run.app/user-recommendation/110'

This Endpoint is used to get user preferences recommendation
```javascript
{
    "message": "Success",
    "data": [
        {
            "type_nearby_destination": [
                "culinary",
                " mall",
                " botanical",
                " historical"
            ],
            "image_links": [
                "https://s3.ap-southeast-2.amazonaws.com/thebalibible.com/uploads/images/venue/594039e685ffcf9bdab11baaff970a14.jpg?v=1",
                " https://pix10.agoda.net/hotelImages/474386/-1/c08b97d6183862230531a97a39f9d8b0.jpg?ca=9&ce=1&s=1024x768",
                " https://www.ubud-villas.com/wp-content/uploads/2021/10/Villa-Hijau_Feature.jpg",
                " https://cf.bstatic.com/xdata/images/hotel/max1280x900/161708562.jpg?k=5454bd2da0494840970988b976c80e89033e795e58b8d85324db3dffa5441055&o=&hp=1",
                " https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/102636121.jpg?k=9d9bb609f20a1ef1e5fe01541db64dc064e24c1800a60dc55917cb9d191d29ab&o="
            ],
            "id": 5,
            "name": "Villa Hijau - Peace and tranquility.",
            "latitude": "-8.500065498130304",
            "longitude": "115.25048098974094",
            "neighborhood": "Ubud",
            "hotel_star": "5.0",
            "price_per_night": 81,
            "free_refund": false,
            "nearby_destination": 5,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": false,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": true,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "family park",
                " culinary",
                " historical"
            ],
            "image_links": [
                "https://pix10.agoda.net/hotelImages/119/1195651/1195651_17092813340056887167.jpg?ca=6&ce=1&s=1024x768",
                " https://pix10.agoda.net/hotelImages/119/1195651/1195651_16110313120048386478.jpg?ca=6&ce=1&s=1024x768",
                " https://q-xx.bstatic.com/xdata/images/hotel/840x460/245394467.jpg?k=88b546a472cc64b7170685b7cb0c9194ddbb10fa55380bb7c3ad16f6ec78cc41&o=",
                " https://pix10.agoda.net/hotelImages/4643527/-1/f3e169aea00c76fe4895bacdd4983653.jpg?ca=9&ce=1&s=1024x768",
                " https://pix10.agoda.net/hotelImages/569/569796/569796_14030509010018550993.jpg?ca=2&ce=1&s=1024x768"
            ],
            "id": 8,
            "name": "Ideal Young Family / Couple house GIANT Pool Sanur",
            "latitude": "-8.692751600212219",
            "longitude": "115.25938325148783",
            "neighborhood": "Sanur",
            "hotel_star": "5.0",
            "price_per_night": 56,
            "free_refund": false,
            "nearby_destination": 3,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": true,
            "staff_vaccinated": true,
            "child_area": true,
            "price_category": 1
        },
        {
            "type_nearby_destination": [
                "family park",
                " sport",
                " zoo",
                " historical"
            ],
            "image_links": [
                "https://www.beautifulbalivillas.com/wp-content/uploads/2019/03/3-bedroom-pool-villas-in-bali-legian.jpg",
                " https://www.beautifulbalivillas.com/wp-content/uploads/2019/03/romantic-3-bedroom-villas-in-bali.jpg",
                " https://www.beautifulbalivillas.com/wp-content/uploads/2020/09/1-bedroom-collage-1.jpg",
                " https://cf.bstatic.com/xdata/images/hotel/max1280x900/235823587.jpg?k=e58a31f9f96beb8ff953c236536c9ec85c43e75df7b1faedb7ecf9385cce01df&o=&hp=1",
                " https://www.beautifulbalivillas.com/wp-content/uploads/2019/03/3-bedroom-pool-villas-in-legian-seminyak.jpg"
            ],
            "id": 28,
            "name": "Beautiful 3BR Villa, Kuta/Legian.",
            "latitude": "-8.714639863507800",
            "longitude": "115.17481006096229",
            "neighborhood": "Kuta Village",
            "hotel_star": "5.0",
            "price_per_night": 118,
            "free_refund": false,
            "nearby_destination": 4,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": false,
            "air_conditioner": false,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": true,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "mall",
                " botanical",
                " historical"
            ],
            "image_links": [
                "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2022/04/10/a809fb6b-25f4-444e-b0ea-263dc46232c9-1649530499667-224c0c42b9ed50e8d46f6cc6101b0869.jpg",
                " http://pix4.agoda.net/hotelimages/agoda-homes/6431646/90487079e0ef6ae8f05dd4daaf24d87f.jpg",
                " https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/11/28/4967d12b-88a5-4fcc-b7cd-710e01449bf3-1638078625387-f73630ca6b2a21ea4d4473bd18e0f2a1.jpg",
                " https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2022/04/10/26857f7c-0069-4b72-92eb-36325b33bdf7-1649530500604-263669a554a1c40b5d7dfa304cb8df25.jpg",
                " http://pix5.agoda.net/hotelimages/agoda-homes/6431646/82a57ca05e0b7e4a16290be5ae25a741.jpg"
            ],
            "id": 32,
            "name": "4BR new luxury villa,8 min to seminyak",
            "latitude": "-8.663443747814657",
            "longitude": "115.16341318635372",
            "neighborhood": "North Kuta",
            "hotel_star": "5.0",
            "price_per_night": 206,
            "free_refund": false,
            "nearby_destination": 4,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "sport",
                " mall"
            ],
            "image_links": [
                "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2015/08/Maca-Villas-Spa-best-villas-in-Seminyak-Bali-Indonesia-1.jpeg",
                " https://pix10.agoda.net/hotelImages/agoda-homes/6547051/bf541ef5c02ce72f0765dee1d9e6322f.jpg?ca=7&ce=1&s=1024x768",
                " https://pix5.agoda.net/hotelimages/16920621/0/b24162fe66831e912112f47ebac96ea2.jpg?s=600x450",
                " https://static.thehoneycombers.com/wp-content/uploads/sites/4/2015/08/Abaca-Villas-best-villas-in-Seminyak-Bali-Indonesia-900x643.jpeg",
                " https://pix10.agoda.net/hotelImages/276/276948/276948_19112713450084523017.jpg?ca=9&ce=1&s=1024x768"
            ],
            "id": 55,
            "name": "Villa with Stylish Interior and Private Pool",
            "latitude": "-8.641597629242580",
            "longitude": "115.14089772763408",
            "neighborhood": "Canggu",
            "hotel_star": "5.0",
            "price_per_night": 45,
            "free_refund": false,
            "nearby_destination": 2,
            "breakfast": false,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 1
        },
        {
            "type_nearby_destination": [
                "mall",
                " botanical",
                " historical"
            ],
            "image_links": [
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/278479400.jpg?k=f15cdcb634cb46e6da0a00d9020670149ba34a5e2d91e70b9f981c6741af7294&o=&hp=1",
                " https://pix10.agoda.net/hotelImages/2990185/0/2e8aa3f5d306e9a38ec0f71780ec761a.jpg?ca=0&ce=1&s=1024x768",
                " https://pix10.agoda.net/hotelImages/299/2990185/2990185_17112613120059867705.jpg?ca=6&ce=1&s=1024x768",
                " https://pix10.agoda.net/hotelImages/2990185/0/873afd6acb81c8d6ec4782a5a8109aa2.jpg?ca=0&ce=1&s=1024x768",
                " https://pix10.agoda.net/hotelImages/13541192/0/6ea48e4d71d9c0a4ea7690eeede20fa1.jpg?ca=13&ce=1&s=1024x768"
            ],
            "id": 64,
            "name": "ChitraVillaBali 2 BDR with Private Pool - Seminyak",
            "latitude": "-8.673201144794422",
            "longitude": "115.17431809075772",
            "neighborhood": "North Kuta",
            "hotel_star": "5.0",
            "price_per_night": 113,
            "free_refund": false,
            "nearby_destination": 4,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "botanical"
            ],
            "image_links": [
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/175020898.jpg?k=4a63ebaa37dc463bdb54344d36f71651c3fb61f417f3464209855eaf3dc3d0ca&o=&hp=1",
                " https://cf.bstatic.com/xdata/images/hotel/max1280x900/175019747.jpg?k=f5820539cf64345d8bad39b7a9940277ac96df448b90e828a75cc01f97958477&o=&hp=1",
                " https://ak-d.tripcdn.com/images/200611000000qzswr31DB_R_550_412_R5_Q70_D.jpg",
                " https://media-cdn.tripadvisor.com/media/vr-splice-j/04/95/f9/77.jpg",
                " https://media-cdn.tripadvisor.com/media/vr-splice-j/07/04/81/a1.jpg"
            ],
            "id": 66,
            "name": "Villa Wahah 2BR paradise in the heart of Seminyak",
            "latitude": "-8.682869140115512",
            "longitude": "115.15982706186192",
            "neighborhood": "Seminyak",
            "hotel_star": "5.0",
            "price_per_night": 182,
            "free_refund": false,
            "nearby_destination": 1,
            "breakfast": false,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "family park",
                " sport",
                " zoo",
                " botanical"
            ],
            "image_links": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9VW1_6w6KEvkJrLmXEzg5zU8BhkyQV8WPtWHHNe3tmhs3ak-U08OXdKycXtsldjHOCf8&usqp=CAU",
                " https://media-cdn.tripadvisor.com/media/vr-splice-j/04/b0/af/a0.jpg",
                " https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/10/12/f1df80a2-ab0f-4499-bc06-d956eb7f2e5d-1634017513365-3fb8025db39c0629b22526a68ffb9a82.jpg",
                " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc6XqtD9Vd7OxGyhwzIq8aLkUhG5fBw68Ij9k4rnbhUvBaq9oTVdvzfLWsLbpxQ8Atzj8&usqp=CAU",
                " https://pix10.agoda.net/hotelImages/445/4458916/4458916_18020911280061664479.jpg?ca=6&ce=1&s=1024x768"
            ],
            "id": 67,
            "name": "Cozy 2BR villa w pool in Seminyak",
            "latitude": "-8.676506000000000",
            "longitude": "115.16664100000000",
            "neighborhood": "North Kuta",
            "hotel_star": "5.0",
            "price_per_night": 131,
            "free_refund": false,
            "nearby_destination": 5,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": true,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "culinary",
                " mall",
                " zoo",
                " botanical"
            ],
            "image_links": [
                "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2022/03/15/c39a33b2-9d78-4df1-b4a3-ecd1bc4a98f4-1647336029094-314917e536ce622f90643bcafdff7d20.jpg",
                " https://media-cdn.tripadvisor.com/media/vr-splice-j/05/e1/26/43.jpg",
                " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiWmZfP1DNzTR4FC__ndEr60slY9ScWVYJ_ClpiwpZ91UU7yJF8omcfvnX1RuXflFUIPU&usqp=CAU",
                " https://media-cdn.tripadvisor.com/media/vr-splice-j/05/e1/30/ae.jpg",
                " https://lh3.googleusercontent.com/zVheiQL8WpFYMMUCJ3FOm1wsjFHw4eEmDaaYfWA0BeM3XhizT-W-CdyVgrx9ll-VSgVoNQeo1MoSzSW0K7URB8-9jaLxGDzP6NpukrOq0DCxKLaW=s430"
            ],
            "id": 69,
            "name": "Lovely House Heart of Seminyak",
            "latitude": "-8.696266000000000",
            "longitude": "115.17041000000000",
            "neighborhood": "Seminyak",
            "hotel_star": "4.5",
            "price_per_night": 366,
            "free_refund": false,
            "nearby_destination": 4,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "family park",
                " botanical",
                " historical",
                " culinary",
                " zoo"
            ],
            "image_links": [
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/229514887.jpg?k=b865954c8fb7c70476782022f2e698b572b7ed1f754d5f1aa71782f19bb08df6&o=&hp=1",
                " https://cf.bstatic.com/xdata/images/hotel/max1024x768/229514916.jpg?k=8501126f7c109b63d76cb91f83caf5d64d8c1e2de636d82519d0e8588c9c303c&o=&hp=1",
                " https://cf.bstatic.com/xdata/images/hotel/max1024x768/285783501.jpg?k=b27462efa31764adc9a9b845b2cdef84b86aff727a67f5b2499195154d834620&o=&hp=1",
                " https://cf.bstatic.com/xdata/images/hotel/max1024x768/229514912.jpg?k=18b896eeb50f8053d3ab24d7b9f4522289ea82e415d0b8b93a7feb0f76850703&o=&hp=1",
                " https://cf.bstatic.com/xdata/images/hotel/max1024x768/231308607.jpg?k=7df12c82c47234f8e2eeb193df72140eada9dd34f4b8892a923f54255fbd0f62&o=&hp=1"
            ],
            "id": 98,
            "name": "Twin Gladaks at Pondok Wahyu",
            "latitude": "-8.503381492607218",
            "longitude": "115.24171661222935",
            "neighborhood": "Ubud",
            "hotel_star": "4.5",
            "price_per_night": 94,
            "free_refund": false,
            "nearby_destination": 5,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": false,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
            }
        ]
    }
```
- Hotel Recommendation
>https://hotel-test-ywu6raktuq-uc.a.run.app/hotel-recommendation/number

- Required
>/[interger]

- Example Request
>curl --location --request POST 'https://hotel-test-ywu6raktuq-uc.a.run.app/hotel-recommendation/50'

This endpoint is to get the hotel recommendation based on hotel
```javascript
{
    "message": "Success",
    "data": [
        {
            "type_nearby_destination": [
                "sport",
                " zoo",
                " mall"
            ],
            "image_links": [
                "https://images.squarespace-cdn.com/content/v1/5feb7772dcac5279f756c909/db08b3a3-dbcf-407c-9040-f9aadbf42eb6/23.jpg",
                " https://www.theluxurybali.com/wp-content/uploads/2016/07/1-or-2-Bedroom-Pool-Villa1-660x440.jpg",
                " https://q-xx.bstatic.com/xdata/images/hotel/840x460/272688877.jpg?k=7b847fc976d2f594455dd2ccd737d28e8f0dcb205fd2a431cb72e10a45255737&o=",
                " https://www.theluxurybali.com/wp-content/uploads/2015/04/The-Istana-Pool-1.jpg",
                " https://q-xx.bstatic.com/xdata/images/hotel/840x460/272689279.jpg?k=0e7e761b575249d1614e3021c3584c60383900613de5c6bf44ffa0a5a6624650&o="
            ],
            "id": 16,
            "name": "Private Luxury, 2 bedroom Villa, in Canggu",
            "latitude": "-8.668900757522296",
            "longitude": "115.14791089797410",
            "neighborhood": "Canggu",
            "hotel_star": "5.0",
            "price_per_night": 206,
            "free_refund": false,
            "nearby_destination": 4,
            "breakfast": true,
            "pool": true,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "family park",
                " mall"
            ],
            "image_links": [
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/86193091.jpg?k=2fe63eef4604863cd511149e52a7bf1d3d1703cb72fd3253abe5bde37ff3b779&o=&hp=1",
                " https://cf.bstatic.com/xdata/images/hotel/max1280x900/175200122.jpg?k=ee0454f22065984c9c6f7fe8156ea4adfd6c71772fe793a85349b916cc49328d&o=&hp=1",
                " https://cf.bstatic.com/xdata/images/hotel/max1280x900/175200635.jpg?k=9dad0301edcdd4cf28485f15ad7501a8c7b79ec0d8f62e9412c0f6b79efbb340&o=&hp=1",
                " https://www.beautifulbalivillas.com/wp-content/uploads/2020/10/private-pool-and-beach-villa-in-legian.jpg",
                " https://ak-d.tripcdn.com/images/220g0u000000jhi070D6A_R_800_525.jpg"
            ],
            "id": 21,
            "name": "Beach Villa 1 Bedroom Deluxe Bfast",
            "latitude": "-8.698228556221297",
            "longitude": "115.16462083049120",
            "neighborhood": "Legian",
            "hotel_star": "4.0",
            "price_per_night": 57,
            "free_refund": false,
            "nearby_destination": 5,
            "breakfast": true,
            "pool": true,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 1
        },
        {
            "type_nearby_destination": [
                "zoo",
                " botanical",
                " historical"
            ],
            "image_links": [
                "https://i.pinimg.com/originals/ec/da/d3/ecdad353bcffeafd584d63e8dcb51833.jpg",
                " https://www.ministryofvillas.com/wp-content/uploads/2012/11/bali-latalianavilla-43.jpg",
                " https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20015865-bf66aa1c20352ed140c941e005b02114.jpeg?_src=imagekit&tr=c-at_max",
                "h-488",
                "q-40",
                "w-768",
                " https://www.vilondo.com/wp-content/uploads/2018/11/bali-niconicomansion-30-400x240.jpg",
                " https://i.pinimg.com/736x/2a/d5/33/2ad5338842af1148c79aebf15d5d828e.jpg"
            ],
            "id": 23,
            "name": "Designer villa w/Pool table & Piano",
            "latitude": "-8.482471187107356",
            "longitude": "115.24990431550134",
            "neighborhood": "Ubud",
            "hotel_star": "5.0",
            "price_per_night": 288,
            "free_refund": false,
            "nearby_destination": 5,
            "breakfast": true,
            "pool": true,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "family park",
                " culinary",
                " botanical",
                " historical"
            ],
            "image_links": [
                "https://a0.muscache.com/im/pictures/101676296/2bb4da46_original.jpg?im_w=720",
                " https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/04/06/ff6971df-b031-4cec-9e92-444d79e4f30e-1617698078621-e0e7a16ba7ebd983b26edf742045a82d.jpg",
                " https://pix1.agoda.net/hotelimages/2175631/0/375f126d917e369914dd9e04c865d591.jpg?s=312x",
                " https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/12/29/b93dc7d7-775b-4bad-9e01-138dbbe04fc3-1609208762611-2616c6db4212c8cd0c77982806cec1ec.jpg",
                " https://pix10.agoda.net/hotelImages/2175631/0/8fbd58d4b2cb9af5fcabded644620593.jpg?ca=0&ce=1&s=1024x768"
            ],
            "id": 24,
            "name": "500meters to Potato Head, 3BR Villa3 Seminyak",
            "latitude": "-8.675110078840973",
            "longitude": "115.15745664551685",
            "neighborhood": "North Kuta",
            "hotel_star": "5.0",
            "price_per_night": 134,
            "free_refund": false,
            "nearby_destination": 5,
            "breakfast": true,
            "pool": true,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "family park",
                " culinary",
                " botanical"
            ],
            "image_links": [
                "https://media-cdn.tripadvisor.com/media/photo-s/07/2a/3e/cf/onlyou-coral-garden-villas.jpg",
                " https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/93/96/5e/onlyou-villas.jpg",
                " https://cf.bstatic.com/xdata/images/hotel/max1024x768/49217026.jpg?k=4e1e166b28664dffe1ed0df9942b9c2f9622a68457859ea861f1e168fd08221c&o=&hp=1",
                " https://q-xx.bstatic.com/xdata/images/hotel/max500/49224993.jpg?k=bf0ccf2b2510bc21e9fcd0f93bccd3fb69751fec3fe7f06caa20dab4ad966442&o=",
                " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/24/77/0e/photo4jpg.jpg?w=900&h=600&s=1"
            ],
            "id": 34,
            "name": "OnlYou Villa with Private pool",
            "latitude": "-8.346472685956515",
            "longitude": "115.67896281519404",
            "neighborhood": "Amed",
            "hotel_star": "4.5",
            "price_per_night": 225,
            "free_refund": false,
            "nearby_destination": 5,
            "breakfast": true,
            "pool": true,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "mall",
                " zoo"
            ],
            "image_links": [
                "https://www.theluxurybali.com/wp-content/uploads/2022/04/1.-Villa-Kayajiwa-Serenity-660x440.jpg",
                " https://media-cdn.tripadvisor.com/media/vr-splice-j/07/06/a0/3a.jpg",
                " https://s1.tapchidulich.com/hotel/1aa12b6a/beautiful-5-star-holiday-villa-in-a-prime-location-in-seminyak-book-early-to-secure-your-dates-1-28173400827868951910-990.jpg",
                " https://www.gapurabali.com/sites/default/files/styles/article-full/public/ssi_well-designed_spacious_villas_for_sale_in_seminyak_pool_3.jpeg?itok=DLLNaG7S",
                " https://www.gapurabali.com/sites/default/files/styles/article-full/public/ssi_well-designed_spacious_villas_for_sale_in_seminyak_pool_2.jpeg"
            ],
            "id": 51,
            "name": "BOHEMIAN LUXURY - PRIME LOCATION - FIVE STAR VILLA",
            "latitude": "-8.659207000000000",
            "longitude": "115.14936100000000",
            "neighborhood": "North Kuta",
            "hotel_star": "5.0",
            "price_per_night": 232,
            "free_refund": false,
            "nearby_destination": 2,
            "breakfast": true,
            "pool": true,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "family park",
                " mall"
            ],
            "image_links": [
                "https://baliluxuryprivatevillas.com/villas-photo/thumb/282_1098367795.jpeg",
                " https://cf.bstatic.com/xdata/images/hotel/max1024x768/279125357.jpg?k=cf9da3f83eb68c80c0fed1eb88f66816039ccef6fa9987fa3123d5be36dc3314&o=&hp=1",
                " https://budgetbalivillas.com/villas-photo/gallery/623_5792109752IMG_6521.jpg",
                " https://budgetbalivillas.com/villas-photo/thumb/632_647718668.jpeg",
                " https://a0.muscache.com/im/pictures/0a7d6dce-ef2e-4325-be5f-42ae2295da21.jpg?im_w=720"
            ],
            "id": 63,
            "name": "Private 5 Bedrooms Villa in Sanur",
            "latitude": "-8.679806909357707",
            "longitude": "115.24498178418340",
            "neighborhood": "Denpasar",
            "hotel_star": "5.0",
            "price_per_night": 122,
            "free_refund": false,
            "nearby_destination": 2,
            "breakfast": true,
            "pool": true,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "family park",
                " mall",
                " botanical"
            ],
            "image_links": [
                "https://pix10.agoda.net/hotelImages/2543205/0/f5b14bf169a1c762b3681d08e1936f80.jpg?ca=16&ce=1&s=1024x768",
                " https://www.balirealty.com/wp-content/uploads/2022/02/Sanur-Villa-2099-1-1024x614.jpg",
                " https://media-cdn.tripadvisor.com/media/photo-s/14/39/02/8e/mahagiri-villas.jpg",
                " https://budgetbalivillas.com/villas-photo/thumb/632_647718668.jpeg",
                " https://balivillaescapes.com.au/wp-content/uploads/2015/01/Majapahit-Nataraja-1-1070x590.jpg"
            ],
            "id": 68,
            "name": "BEST BUDGET 2 BR VILLA IN SANUR",
            "latitude": "-8.686372000000000",
            "longitude": "115.26021600000000",
            "neighborhood": "Sanur",
            "hotel_star": "4.5",
            "price_per_night": 118,
            "free_refund": false,
            "nearby_destination": 5,
            "breakfast": true,
            "pool": true,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "mall",
                " zoo",
                " botanical",
                " historical"
            ],
            "image_links": [
                "https://balivillaexotic.com/wp-content/uploads/bfi_thumb/viola_villa-3-pifd14wbqdlw575s591xryix8vljlbb9qj9ksu2nvk.jpg",
                " https://www.elitehavens.com/images/gallery/lowres/P00011/RNID1048-Dea-Villas-Listing.jpg",
                " https://www.bendegavillasbali.com/resources/bendega/headers/mobile/Bendega%20Nui%20-%20Pool%20and%20deck%20chairs.jpg",
                " https://cimages.elitehavens.com/images/gallery/lowres/P00019/Bendega-Complex-Listing-734x488.jpg",
                " https://www.ministryofvillas.com/wp-content/uploads/2017/08/bali-chandravillas-chandravillas9-01.jpg"
            ],
            "id": 71,
            "name": "Luxury 9 Bedroom Pool Villa + Breakfast",
            "latitude": "-8.646087626377295",
            "longitude": "115.14014336471566",
            "neighborhood": "Canggu",
            "hotel_star": "5.0",
            "price_per_night": 505,
            "free_refund": false,
            "nearby_destination": 4,
            "breakfast": true,
            "pool": true,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "sport"
            ],
            "image_links": [
                "https://m.theseminyaksuite.com/images/villas/1-bedroom/large_living-room-1-bedroom-seminyak-villa.jpg",
                " https://www.propertiabali.com/wp-content/uploads/WPL/2018/thimg__MG_9798-HDR_autox501.jpg",
                " https://cf.bstatic.com/xdata/images/hotel/max1024x768/250525684.jpg?k=eeb17b86493ca42084eea32f5424e555b9b5f738cf7a09938d2a15e25019ebc8&o=&hp=1",
                " https://pix10.agoda.net/hotelImages/22239654/-1/ef9e7617b12128ed40658a6329e53bbe.jpg?ca=24&ce=0&s=1024x768",
                " https://cf.bstatic.com/xdata/images/hotel/max1024x768/275485770.jpg?k=086ea0dc57fe755bcc08549ea850fd681ced7e201caf401ce954180fc00dfbac&o=&hp=1"
            ],
            "id": 95,
            "name": "COZY 1 Bedroom at Seminyak",
            "latitude": "-8.689413917104154",
            "longitude": "115.17061177273860",
            "neighborhood": "Seminyak",
            "hotel_star": "4.5",
            "price_per_night": 37,
            "free_refund": false,
            "nearby_destination": 1,
            "breakfast": true,
            "pool": true,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 1
            }
        ]
    }
```
- By Location Recommendation
>https://hotel-test-ywu6raktuq-uc.a.run.app

- Required
>/byLocation

- Example Request
>curl --location --request POST 'https://hotel-test-ywu6raktuq-uc.a.run.app/byLocation/' \
--data-raw '{
    "user_id":10,
    "longitude":12.7,
    "latitude":35.6
}'

This endpoint is strictly for giving recommendation for users by their location.
```javascript
{
    "message": "Success",
    "data": [
        {
            "type_nearby_destination": [
                "botanical"
            ],
            "image_links": [
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/36057502.jpg?k=17285ebdaf64fa436a748d639b40274cb20e8150ffdd335eaf28a0baf4598b83&o=&hp=1",
                " https://cf.bstatic.com/xdata/images/hotel/max1024x768/100354372.jpg?k=6fa862e8e1f0134b83e189aa63507de0317246b14e8a2d6bfb2b8dd0df5aef84&o=&hp=1",
                " https://yomavillasbali.com/wp-content/uploads/2016/09/Yoma-Villas-Bali-Luxury-Accommodation-Villa-Batur-Gallery-13.jpg",
                " https://cf.bstatic.com/xdata/images/hotel/max1280x900/33256054.jpg?k=9db8a051b075ab4b7b36937d098d9e59a3353bef16ece8446f584505adccce6a&o=&hp=1",
                " https://cf.bstatic.com/xdata/images/hotel/max500/240326281.jpg?k=67ea352e72c793ca1fc4fd44352f48ca2a0c491dcecb950ce8d796be69e640c8&o=&hp=1"
            ],
            "id": 15,
            "name": "Yoma Villas Bali - Villa Batur 3 bedroom",
            "latitude": "-8.641679783016158",
            "longitude": "115.13408163470034",
            "neighborhood": "Canggu",
            "hotel_star": "5.0",
            "price_per_night": 185,
            "free_refund": false,
            "nearby_destination": 1,
            "breakfast": false,
            "pool": false,
            "wifi": false,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "family park",
                " culinary",
                " sport"
            ],
            "image_links": [
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/55935968.jpg?k=c594f798a315fdf5be6280e8974798af3f42aea0c54a16734e917a1a97e28b82&o=&hp=1",
                " https://balivacationhomes.com/wp-content/uploads/2019/02/villa-joglo-bali-vacation-homes-004.jpg",
                " https://pix10.agoda.net/hotelImages/188/1883156/1883156_17030910400051442901.jpg?ca=13&ce=1&s=1024x768",
                " https://media-cdn.tripadvisor.com/media/photo-s/01/90/82/8d/our-two-storey-two-bedroom.jpg",
                " https://cf.bstatic.com/xdata/images/hotel/max1024x768/96748331.jpg?k=741b9e11622783f0cb8883a74999d3edae41b78248408b796107b5befbf377e4&o=&hp=1"
            ],
            "id": 18,
            "name": "Amazing Joglo house - Lovina Beach",
            "latitude": "-8.155665078822677",
            "longitude": "115.03235251301484",
            "neighborhood": "Lovina",
            "hotel_star": "5.0",
            "price_per_night": 249,
            "free_refund": false,
            "nearby_destination": 3,
            "breakfast": false,
            "pool": true,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": true,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "zoo",
                " botanical",
                " historical"
            ],
            "image_links": [
                "https://i.pinimg.com/originals/ec/da/d3/ecdad353bcffeafd584d63e8dcb51833.jpg",
                " https://www.ministryofvillas.com/wp-content/uploads/2012/11/bali-latalianavilla-43.jpg",
                " https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20015865-bf66aa1c20352ed140c941e005b02114.jpeg?_src=imagekit&tr=c-at_max",
                "h-488",
                "q-40",
                "w-768",
                " https://www.vilondo.com/wp-content/uploads/2018/11/bali-niconicomansion-30-400x240.jpg",
                " https://i.pinimg.com/736x/2a/d5/33/2ad5338842af1148c79aebf15d5d828e.jpg"
            ],
            "id": 23,
            "name": "Designer villa w/Pool table & Piano",
            "latitude": "-8.482471187107356",
            "longitude": "115.24990431550134",
            "neighborhood": "Ubud",
            "hotel_star": "5.0",
            "price_per_night": 288,
            "free_refund": false,
            "nearby_destination": 5,
            "breakfast": true,
            "pool": true,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "family park",
                " mall",
                " historical"
            ],
            "image_links": [
                "https://static.trip101.com/images/pictures/000/000/069/large/65937345.jpg?1486119433",
                " https://cf.bstatic.com/xdata/images/hotel/max500/90660926.jpg?k=8e81eecd667df04533f9875cfcd53989e555bf9a1dee15f0d924cc80bda9b1af&o=&hp=1",
                " https://cf.bstatic.com/xdata/images/hotel/max1024x768/90653228.jpg?k=ffafef6d5c4672d7119dcb3d61130d9f1ec1396ad048938f9f8e4ab20cc3cc42&o=&hp=1",
                " http://pix10.agoda.net/hotelImages/564/564923/564923_16091217010046363011.jpg?ca=13&ce=1&s=768x1024",
                " https://cf.bstatic.com/xdata/images/hotel/max1024x768/345543830.jpg?k=55a882a5cf454b77b15d953377fb6c3daea0c343392fce457984efa3ed8a0c6b&o=&hp=1"
            ],
            "id": 36,
            "name": "2bdroom villa near beach big garden",
            "latitude": "-8.162829695771979",
            "longitude": "115.03930868517462",
            "neighborhood": "Lovina",
            "hotel_star": "3.0",
            "price_per_night": 62,
            "free_refund": false,
            "nearby_destination": 4,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": false,
            "air_conditioner": true,
            "wheelchair_access": true,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 1
        },
        {
            "type_nearby_destination": [
                "family park",
                " zoo",
                " historical"
            ],
            "image_links": [
                "https://cf.bstatic.com/xdata/images/hotel/max500/300352778.jpg?k=9c5c5ac91222294fd0c3e2819b2cfae7d38d4043dd44fe15c8b27f37b010956d&o=&hp=1",
                " https://cf.bstatic.com/xdata/images/hotel/max1024x768/300352783.jpg?k=30145d7c80a1090a1c9d354ff2d396bad84578e6474abc51157132d44aa27eb7&o=&hp=1",
                " https://cf.bstatic.com/xdata/images/hotel/max500/300352777.jpg?k=cd0ef5debfaf073d41dda3c94828823345ec0d77e9c23a0fe1f57db90088ef10&o=&hp=1",
                " https://cf.bstatic.com/xdata/images/hotel/max500/300352713.jpg?k=babc36c7dcdf9700192613d1b93f6072213a86b28a51c088a6426463ec0eefb6&o=&hp=1",
                " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxkBkd0dKk5MyzfP50l2KbYmDG0NLhlg5DzvUmKg3-zzClBUPKCFoTLwOcN6bKp-cr02o&usqp=CAU",
                " https://cf.bstatic.com/xdata/images/hotel/max1024x768/300352811.jpg?k=aec87d5f98ab44fa9d51fe5aaf67983aa20957ac978a966e09f836636864c7fc&o=&hp=1"
            ],
            "id": 52,
            "name": "Villa Mimpi Indah - Lush Paradise",
            "latitude": "-8.641074197438442",
            "longitude": "115.13939839805109",
            "neighborhood": "Canggu",
            "hotel_star": "5.0",
            "price_per_night": 157,
            "free_refund": false,
            "nearby_destination": 4,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": true,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "sport",
                " mall"
            ],
            "image_links": [
                "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2015/08/Maca-Villas-Spa-best-villas-in-Seminyak-Bali-Indonesia-1.jpeg",
                " https://pix10.agoda.net/hotelImages/agoda-homes/6547051/bf541ef5c02ce72f0765dee1d9e6322f.jpg?ca=7&ce=1&s=1024x768",
                " https://pix5.agoda.net/hotelimages/16920621/0/b24162fe66831e912112f47ebac96ea2.jpg?s=600x450",
                " https://static.thehoneycombers.com/wp-content/uploads/sites/4/2015/08/Abaca-Villas-best-villas-in-Seminyak-Bali-Indonesia-900x643.jpeg",
                " https://pix10.agoda.net/hotelImages/276/276948/276948_19112713450084523017.jpg?ca=9&ce=1&s=1024x768"
            ],
            "id": 55,
            "name": "Villa with Stylish Interior and Private Pool",
            "latitude": "-8.641597629242580",
            "longitude": "115.14089772763408",
            "neighborhood": "Canggu",
            "hotel_star": "5.0",
            "price_per_night": 45,
            "free_refund": false,
            "nearby_destination": 2,
            "breakfast": false,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 1
        },
        {
            "type_nearby_destination": [
                "sport"
            ],
            "image_links": [
                "https://media-cdn.tripadvisor.com/media/photo-s/14/0e/53/cf/breakfast-at-the-rice.jpg",
                " https://cf.bstatic.com/xdata/images/hotel/max500/275431396.jpg?k=cbb6fd07b55e984b827381b536a400bd35d6fc70cad8a861e4c3022ecca9f852&o=&hp=1",
                " https://cf.bstatic.com/xdata/images/hotel/max300/275431337.jpg?k=112c3efe28311bfb8ae1ff0651a473c20c57bfd0b5ff452b3016aa7c3b1d055f&o=&hp=1",
                " https://cf.bstatic.com/xdata/images/hotel/max1024x768/275431349.jpg?k=1cfa2aa3bbbc2bc28bc4f14bea2ff199ab91609afa2f362abb99c9edb39e5211&o=&hp=1",
                " https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000366-2500x1658-FIT_AND_TRIM-9f3a4aceee1cc8f870aad78a23d4988b.jpeg?tr=q-40",
                "c-at_max",
                "w-1280",
                "h-720&_src=imagekit"
            ],
            "id": 59,
            "name": "Unique stay at the Rice paddies",
            "latitude": "-8.163708196425720",
            "longitude": "115.02876253146673",
            "neighborhood": "Lovina",
            "hotel_star": "4.5",
            "price_per_night": 127,
            "free_refund": false,
            "nearby_destination": 1,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": false,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": true,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "family park",
                " botanical",
                " historical",
                " mall",
                " sport"
            ],
            "image_links": [
                "https://usercontent.one/wp/www.sunshineseeker.com/wp-content/uploads/2016/02/Batu_Bolong_Beach_Canggu_Bali.jpg",
                " https://www.kintamani.id/wp-content/uploads/Echo-Beach-Club-Canggu-2.jpg",
                " https://www.befreetour.com/img/attraction/echo-beach-club20191025112727.jpg",
                " https://www.water-sport-bali.com/wp-content/uploads/2018/10/Pantai-Echo-Beach-Canggu-Bali-Twitter.jpg",
                " https://www.kintamani.id/wp-content/uploads/Echo-Beach-Club-Canggu-3.jpg"
            ],
            "id": 80,
            "name": "Casa Noah, Echo beach-Batu Bolong",
            "latitude": "-8.650314211532743",
            "longitude": "115.13283999966204",
            "neighborhood": "Canggu",
            "hotel_star": "5.0",
            "price_per_night": 225,
            "free_refund": false,
            "nearby_destination": 5,
            "breakfast": false,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": true,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 2
        },
        {
            "type_nearby_destination": [
                "family park",
                " sport"
            ],
            "image_links": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlAgN3cE_abVS97uhdsOgpaG_A_92xqe9dSgQ-_NSuiy5M64X4fyDtZ65Y0ut5yaMMOa4&usqp=CAU",
                " https://ak-d.tripcdn.com/images/220o1g000001hf9fqB48F_Z_550_412_R5_Q70_D.jpg",
                " https://ak-d.tripcdn.com/images/22051g000001hf4j4D8E8_Z_550_412_R5_Q70_D.jpg",
                " https://media-cdn.tripadvisor.com/media/photo-i/1d/21/2e/06/lagoon-pool.jpg",
                " https://ppbali.com/wp-content/uploads/2018/01/Paradise_SCGU1561-5.jpg"
            ],
            "id": 82,
            "name": "★SPACIOUS APARTMENT IN SURFERS PARADISE★#4",
            "latitude": "-8.655831911306656",
            "longitude": "115.12772839524044",
            "neighborhood": "Canggu",
            "hotel_star": "4.5",
            "price_per_night": 70,
            "free_refund": false,
            "nearby_destination": 2,
            "breakfast": true,
            "pool": true,
            "wifi": true,
            "parking": false,
            "smoking": false,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 1
        },
        {
            "type_nearby_destination": [
                "mall"
            ],
            "image_links": [
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/295299109.jpg?k=e1fac817b9d73991081712a143ee839bfab5f35db62cb6e92080c2c5ad46e7e0&o=&hp=1",
                " https://cf.bstatic.com/xdata/images/hotel/max1024x768/295298996.jpg?k=611537f04ef35daa24ae2b2faafebddfb91de61a82e57dc8cccbc31dd3186d31&o=&hp=1",
                " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8dXHCSh0C8Xrs0ilAj3xxOc35hkmNTzIPOt0AubIArxE4B1jqrR31IkepnCLvnZ34WBY&usqp=CAU",
                " https://cf.bstatic.com/xdata/images/hotel/max500/295299014.jpg?k=3408b801584aa6dd4ea5c1bae13c78847a946ee5165932a9f2018e433fae0df4&o=&hp=1",
                " https://cf.bstatic.com/xdata/images/hotel/max1024x768/222201784.jpg?k=0379b73222b1ab0b4308b987a0fa2036ed6fa2e766381d52830af7b430d411f6&o=&hp=1"
            ],
            "id": 90,
            "name": "Pererenan beach Jubilee Suites n°6",
            "latitude": "-8.648930248649839",
            "longitude": "115.12718151523585",
            "neighborhood": "Canggu",
            "hotel_star": "5.0",
            "price_per_night": 26,
            "free_refund": false,
            "nearby_destination": 2,
            "breakfast": true,
            "pool": false,
            "wifi": true,
            "parking": true,
            "smoking": true,
            "air_conditioner": true,
            "wheelchair_access": false,
            "average_bed_size": false,
            "staff_vaccinated": true,
            "child_area": false,
            "price_category": 1
        }
    ]
}
```
# Login-Register API
In this Section, There is a Login-Register API That can be used as Login and Register System For Our Hotel apps. Response from each URL using JSON format.

- Base URL:
>https://test1-ywu6raktuq-uc.a.run.app

- Path:
>/user

- Method:
><Code><font color="Yellow">POST</font></Code> 

- User Registration
>https://test1-ywu6raktuq-uc.a.run.app/user/register

- Example request
>curl --location --request POST 'https://test1-ywu6raktuq-uc.a.run.app/user/register' \
--data-urlencode 'email=' \
--data-urlencode 'userName=' \
--data-urlencode 'password='

This endpoint is to Registering User
```javascript
{
    "message": "successful"
}
```
- User Login
>https://test1-ywu6raktuq-uc.a.run.app/user/login

- Example Request
>curl --location --request POST 'https://test1-ywu6raktuq-uc.a.run.app/user/login' \
--data-urlencode 'userName=' \
--data-urlencode 'password='

This endpoint is to User Login Without Google
```javascript
{
    "message": "successful",
    "data": {
        "userId": 131,
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZyZWRkeWFuZHJlYXM0QGdtYWlsLmNvbSIsImlkIjoxMzEsInVzZXJOYW1lIjoiZnJlZGR5YW5kcmVhc2NoYW5kcmEiLCJpYXQiOjE2NTQzMzE2MDgsImV4cCI6MTY1NDMzMjUwOH0.wAcEjAF7SEOs4Rp9XpHhXYXn4FcS7qW9r2fIdVGY030"
    }
}
```
- LOG IN with GOOGLE
>https://test1-ywu6raktuq-uc.a.run.app/user/login/google?code={{codeToken}}

- Method:
><Code><font color="Green">GET</font></Code> 

- Example request
>curl --location -g --request GET 'https://test1-ywu6raktuq-uc.a.run.app/user/login/google?code={{codeToken}}'

This Endpoint is to User Login With Google
```javascript
{
    "message": "successful",
    "data": {
        "userId": 131,
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZyZWRkeWFuZHJlYXM0QGdtYWlsLmNvbSIsImlkIjoxMzEsInVzZXJOYW1lIjoiZnJlZGR5YW5kcmVhc2NoYW5kcmEiLCJpYXQiOjE2NTQzMzQyNTYsImV4cCI6MTY1NDMzNTE1Nn0.BCM-f1dUbo_8seLtFchrWq1C7XvKAX1teCj5FZmbuJo"
    }
}
```
- GET USER BY ID
>https://test1-ywu6raktuq-uc.a.run.app/user/

- Example request
>curl --location --request GET 'https://test1-ywu6raktuq-uc.a.run.app/user/' \
--header 'Authorization: Bearer •••••••'

This Endpoint is to Get the User By id 
```javascript
{
    "message": "sucessfull",
    "data": {
        "hobby": [
            ""
        ],
        "search_history": [
            ""
        ],
        "stay_history": [
            ""
        ],
        "special_needs": [
            ""
        ],
        "id": 131,
        "name": null,
        "birth_date": null,
        "nid": null,
        "family": false,
        "email": "freddyandreas4@gmail.com",
        "userName": "freddyandreaschandra",
        "reviewCounter": 0,
        "createdAt": "2022-06-04T07:38:05.000Z",
        "updatedAt": "2022-06-04T07:38:05.000Z"
    }
}
```
- REFRESH LOGIN
>https://test1-ywu6raktuq-uc.a.run.app/user/login

- Required
>/refresh-login

- Example Request
>curl --location --request GET 'https://test1-ywu6raktuq-uc.a.run.app/user/login/refresh-login'

Request to get a new 'access token' for getting session/to login. This request will be use 'cache' that set to the client before in Login to do this request
```javascript
{
    "message": "successful",
    "data": {
        "userId": 131,
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZyZWRkeWFuZHJlYXM0QGdtYWlsLmNvbSIsImlkIjoxMzEsInVzZXJOYW1lIjoiZnJlZGR5YW5kcmVhc2NoYW5kcmEiLCJpYXQiOjE2NTQzMzIyNDUsImV4cCI6MTY1NDMzMzE0NX0.GKM2wqPEkx6lrL-ltT5DLnjIrZcw_fmD7imoMiARzzM"
    }
}
```

- UPDATE USER BY ID
>https://test1-ywu6raktuq-uc.a.run.app/user/

- Method
><Code><font color="#4B7BE5">PUT</font></Code> 

- Example Request
>curl --location --request PUT 'https://test1-ywu6raktuq-uc.a.run.app/user/' \
--header 'Authorization: Bearer •••••••'

This Endpoint is to update user needs by looking for userId
```javascript
{
    "message": "sucessfull"
}
```
- LOGOUT
>https://test1-ywu6raktuq-uc.a.run.app/user

- Required
>/logout

- Method
><Code><font color="F32424">DELETE</font></Code>

- Example Request
>curl --location --request DELETE 'https://test1-ywu6raktuq-uc.a.run.app/user/logout'

Logout session by delete the 'refresh token' in cache
```javascript
{
    "message": "successful"
}
```

# Review API
In this Section, There is a Review API that can be used to create, manage, update, and delete through our hotel apps. Response from each URL using JSON format.

- Base URL
>https://review-ywu6raktuq-uc.a.run.app

- Path
>/reviews

- Required
>/{hotelId} as [interger]/ {userId} as [interger]

- Method
><Code><font color="Yellow">POST</font></Code>

- Example Request
>curl --location -g --request POST 'https://review-ywu6raktuq-uc.a.run.app/reviews/{{hotelId}}/{{userId}}' \
--header 'Authorization: Bearer {{accessToken}}' \
--data-raw '{
    "text":"the door makes stupid sound",
    "rating": 2
}'

This endpoint to creates new reviews based on specific hotelId and userId
```javascript
{
    "message": "post review success"
}
```
- Find All Reviews
>https://review-ywu6raktuq-uc.a.run.app/reviews

- Method
><Code><font color="Green">GET</font></Code> 

- Example Request
>curl --location --request GET 'https://review-ywu6raktuq-uc.a.run.app/reviews'

This endpoint is to list all the reviews. there's a lot
```javascript
[
    {
        "id": 9679,
        "text": "i can t really complain about the hotel because it exceeded expectations considering it is only a star hotel but if i had to make a negative comment it would be that the shower takes a while to drain which can be annoying when you re standing in a puddle of water also the shower door couldnt open fully because it would hit the sink we didn t try the breakfast so i can t comment but there seemed to be a lot of choice",
        "labels": 0,
        "rating": 3,
        "dates": "2022-01-19T12:24:40.000Z",
        "hotel_id": 55,
        "user_id": 79
    },
    {
        "id": 9680,
        "text": "fantastic location located in a very central location and you can walk to all tourist sights from the hotel also very close to the airport drop off bus so makes getting to and from the airport easy",
        "labels": 1,
        "rating": 5,
        "dates": "2022-03-05T07:54:06.000Z",
        "hotel_id": 49,
        "user_id": 1
    },
    {
        "id": 9681,
        "text": "i had asked for a room with a nice view on the courtyard and i got a room with q view on the street i selected this hotel because it was written it was very quiet yet the noise made by the entrance door kept us await all night long i usually am very happy with golden tulip very disappointed in this very case",
        "labels": 1,
        "rating": 5,
        "dates": "2022-01-25T15:36:28.000Z",
        "hotel_id": 74,
        "user_id": 37
    },
    {
        "id": 9682,
        "text": "although i had two rooms for ten nights they charged me bound to have my kids in one room when i told them that i don t need extra bed they say the policy does not allow for in the room and you have to take a bigger room",
        "labels": 0,
        "rating": 3,
        "dates": "2022-01-11T14:39:43.000Z",
        "hotel_id": 3,
        "user_id": 87
    },
    {
        "id": 9683,
        "text": "very friendly and accommodating staff spa facilities are good rooms are spacious and quiet with the best black out curtains their complimentary drinks in the fridge is a very nice touch and also i had a very pleasant and unexpected surprise when i was greeted with a card and wine for my birthday thank you so much",
        "labels": 1,
        "rating": 5,
        "dates": "2022-05-04T05:37:29.000Z",
        "hotel_id": 31,
        "user_id": 33
    },
    {
        "id": 9684,
        "text": "the staff is nice and very helpful specially at the reception",
        "labels": 1,
        "rating": 4,
        "dates": "2022-04-21T00:37:56.000Z",
        "hotel_id": 6,
        "user_id": 7
    },
    {
        "id": 9685,
        "text": "the rooms are a bit noisy",
        "labels": 0,
        "rating": 2,
        "dates": "2022-04-08T02:41:50.000Z",
        "hotel_id": 51,
        "user_id": 83
    },
    {
        "id": 9686,
        "text": "the fact that we could not use the level top floor terrace as booked out for a private function",
        "labels": 0,
        "rating": 3,
        "dates": "2022-01-15T05:03:06.000Z",
        "hotel_id": 5,
        "user_id": 91
    },
    {
        "id": 9687,
        "text": "although it was the weekend before christmas it was still a lot of money for the night but my choice and i accept that",
        "labels": 0,
        "rating": 1,
        "dates": "2022-01-14T17:30:46.000Z",
        "hotel_id": 36,
        "user_id": 82
    },
    {
        "id": 9688,
        "text": "dining room is not the most comfortable location for lingering over glass of wine i appreciate space is limited but perhaps furniture could be rearranged to make it more atmospheric",
        "labels": 0,
        "rating": 2,
        "dates": "2022-03-27T07:14:25.000Z",
        "hotel_id": 42,
        "user_id": 98
    },
    {
        "id": 9689,
        "text": "the bed was not at all comfortable i could feel almost every spring under me as i moved it was certainly not what i have experienced in other hilton hotels",
        "labels": 0,
        "rating": 3,
        "dates": "2022-04-20T01:19:42.000Z",
        "hotel_id": 11,
        "user_id": 37
    },
    {
        "id": 9690,
        "text": "we were very happy with our choice of hotel and liked everything",
        "labels": 0,
        "rating": 3,
        "dates": "2022-04-06T13:09:23.000Z",
        "hotel_id": 2,
        "user_id": 20
    },
    {
        "id": 9691,
        "text": "the breakfest was really good",
        "labels": 1,
        "rating": 4,
        "dates": "2022-03-28T18:01:09.000Z",
        "hotel_id": 46,
        "user_id": 61
    },
    {
        "id": 9692,
        "text": "the staff were super helpful ordering taxis organising for a late check out iron very professional",
        "labels": 1,
        "rating": 4,
        "dates": "2022-02-02T01:31:26.000Z",
        "hotel_id": 46,
        "user_id": 55
    },
    {
        "id": 9693,
        "text": "staffs are very nice the location is good the bed is very comfortable",
        "labels": 1,
        "rating": 5,
        "dates": "2022-01-09T08:34:04.000Z",
        "hotel_id": 93,
        "user_id": 76
    },
    {
        "id": 9694,
        "text": "the room was great clean aircondition is warm and good bed was big comforteble and nice",
        "labels": 1,
        "rating": 5,
        "dates": "2022-04-03T17:57:58.000Z",
        "hotel_id": 14,
        "user_id": 73
    },
    {
        "id": 9695,
        "text": "it s a an ideal location to the main sites in barcelona a very clean and well facilitated hotel the staff are extremely helpful and couldn t have been more helpful throughout our stay would thoroughly recommend",
        "labels": 1,
        "rating": 5,
        "dates": "2022-01-15T16:55:28.000Z",
        "hotel_id": 94,
        "user_id": 49
    },
    {
        "id": 9696,
        "text": "the hotel lobby was very swanky and the bed in our room was luxurious and a great size i liked that you had iplayer and youtube so we could watch episodes etc on there the bathroom was immaculate in terms of cleanliness great sized bath and i like the open shower vibe",
        "labels": 1,
        "rating": 4,
        "dates": "2022-02-10T20:07:18.000Z",
        "hotel_id": 94,
        "user_id": 50
    },
    {
        "id": 9697,
        "text": "tiny bathroom no tea coffee making facilities holes in net curtains",
        "labels": 0,
        "rating": 1,
        "dates": "2022-05-15T12:58:19.000Z",
        "hotel_id": 73,
        "user_id": 32
    },
    {
        "id": 9698,
        "text": "updated and beautiful room bed was soft but comfortable very clean staff was really helpful and friendly location was perfect walking distance to museums parks and city centre",
        "labels": 1,
        "rating": 5,
        "dates": "2022-03-22T15:20:55.000Z",
        "hotel_id": 86,
        "user_id": 88
    },
    {
        "id": 9699,
        "text": "air conditioning not working on a day",
        "labels": 0,
        "rating": 1,
        "dates": "2022-03-17T11:34:37.000Z",
        "hotel_id": 32,
        "user_id": 27
    },
    {
        "id": 9700,
        "text": "the decor",
        "labels": 0,
        "rating": 3,
        "dates": "2022-01-19T13:47:40.000Z",
        "hotel_id": 34,
        "user_id": 64
    },
    {
        "id": 9701,
        "text": "great location close to park shops restaurants and next to station",
        "labels": 1,
        "rating": 4,
        "dates": "2022-03-28T09:38:53.000Z",
        "hotel_id": 35,
        "user_id": 68
    },
    {
        "id": 9702,
        "text": "the bedroom was very noisy with a metallic grating sound from a large extractor fan outside the bedroom window room",
        "labels": 0,
        "rating": 3,
        "dates": "2022-03-16T11:05:51.000Z",
        "hotel_id": 31,
        "user_id": 19
    },
    {
        "id": 9703,
        "text": "staff speaking only italian",
        "labels": 0,
        "rating": 2,
        "dates": "2022-03-13T12:02:05.000Z",
        "hotel_id": 96,
        "user_id": 34
    },
    {
        "id": 9704,
        "text": "room a bit hot and we couldn t easily work the heating control",
        "labels": 0,
        "rating": 1,
        "dates": "2022-03-21T22:37:56.000Z",
        "hotel_id": 56,
        "user_id": 11
    },
    {
        "id": 9705,
        "text": "there was no luggage rack tea coffee facilities in the room not even a notepad and pen was available the room was really dark and very basic very noisy after advertising that the rooms where sound proof but running water can be heard through walls from other rooms using toilet or shower",
        "labels": 0,
        "rating": 1,
        "dates": "2022-03-09T17:19:16.000Z",
        "hotel_id": 97,
        "user_id": 47
    },
    {
        "id": 9706,
        "text": "yes the hotel was great i really enjoyed my stay parking was excellent the only downside was the breakfast thought things had been around longer than they should have been i e bacon it was a shame but it wouldn t stop me from staying again",
        "labels": 1,
        "rating": 4,
        "dates": "2022-03-14T13:31:48.000Z",
        "hotel_id": 27,
        "user_id": 5
    },
    {
        "id": 9707,
        "text": "great location as visited hyde park literally opposite and very stylish entrance and warm welcome and easy check in rooms pleasant",
        "labels": 1,
        "rating": 4,
        "dates": "2022-04-09T03:55:35.000Z",
        "hotel_id": 46,
        "user_id": 97
    },
    {
        "id": 9708,
        "text": "bar evening meals could be better pillows could be larger breakfast price could be cheaper",
        "labels": 0,
        "rating": 2,
        "dates": "2022-02-14T20:56:17.000Z",
        "hotel_id": 22,
        "user_id": 18
    },
    {
        "id": 9709,
        "text": "the staff were outstanding always willing to help especially jakob at the concierge desk",
        "labels": 1,
        "rating": 4,
        "dates": "2022-01-15T14:32:15.000Z",
        "hotel_id": 35,
        "user_id": 18
    },
    {
        "id": 9710,
        "text": "everything about this place is great very comfy beds excellent staff",
        "labels": 1,
        "rating": 5,
        "dates": "2022-04-14T23:10:18.000Z",
        "hotel_id": 30,
        "user_id": 13
    },
    {
        "id": 9711,
        "text": "asked requested for twin bed room and got a double",
        "labels": 0,
        "rating": 2,
        "dates": "2022-03-22T08:36:23.000Z",
        "hotel_id": 46,
        "user_id": 16
    },
    {
        "id": 9712,
        "text": "not possible to have heating on without fan which was noisy and made sleeping problematic confusion over whether we had booked a river view room and only received bureaucratic official answers",
        "labels": 0,
        "rating": 1,
        "dates": "2022-03-31T18:04:36.000Z",
        "hotel_id": 74,
        "user_id": 59
    },
    {
        "id": 9713,
        "text": "the size was too small and description was totally not like i got at the site the price was double compared to nearby hotels and the water bottles were only free for the first day so better to book only one night loool",
        "labels": 0,
        "rating": 2,
        "dates": "2022-03-18T13:55:52.000Z",
        "hotel_id": 22,
        "user_id": 28
    },
    {
        "id": 9714,
        "text": "loved the location we could walk to the royal albert hall nationaly history museum v a so brilliant",
        "labels": 1,
        "rating": 5,
        "dates": "2022-03-21T15:37:21.000Z",
        "hotel_id": 12,
        "user_id": 66
    },
    {
        "id": 9715,
        "text": "the staff relocated me to a quieter room after one night",
        "labels": 1,
        "rating": 5,
        "dates": "2022-01-15T05:16:22.000Z",
        "hotel_id": 68,
        "user_id": 86
    },
    {
        "id": 9716,
        "text": "no tea coffee facilities in the room",
        "labels": 0,
        "rating": 3,
        "dates": "2022-01-16T21:15:34.000Z",
        "hotel_id": 65,
        "user_id": 68
    },
    {
        "id": 9717,
        "text": "room could have been a bit bigger have stayed before and our previous room was much bigger",
        "labels": 0,
        "rating": 1,
        "dates": "2022-03-16T06:58:25.000Z",
        "hotel_id": 34,
        "user_id": 30
    },
    {
        "id": 9718,
        "text": "the room a bit small for north american standards",
        "labels": 0,
        "rating": 1,
        "dates": "2022-02-16T05:50:35.000Z",
        "hotel_id": 89,
        "user_id": 62
    },
    {
        "id": 9719,
        "text": "the staff and the wifi",
        "labels": 0,
        "rating": 2,
        "dates": "2022-01-30T01:07:41.000Z",
        "hotel_id": 100,
        "user_id": 94
    },
    {
        "id": 9720,
        "text": "there was a marathon scheduled to run right in front of the hotel sunday morning so we left very early in order to get a taxi to the airport since the whole area was closing down just an fyi check for local festivals etc the area is busy and noisy with the cathedral bell tower chiming regularly but the hotel has very good windows that really keep out the noise just don t plan on keeping the windows open on a saturday night if your room faces the cathedral plaza",
        "labels": 0,
        "rating": 1,
        "dates": "2022-02-14T02:24:57.000Z",
        "hotel_id": 11,
        "user_id": 46
    },
    {
        "id": 9721,
        "text": "i booked the hotel for nights and then thought i d read some reviews i got a bit of a shock after reading the really poor ones about horrible staff money fraud loud noise etc so i thought the stay was going to be horrible because it was a last minute booking we arrived at the hotel and i was prepared for the absolute worst well i didn t have to fight anyone receptionist was quick and friendly and showed us to our floor dbl bedroom nr it looked ok the hotel is not modern but you can see that from the pictures possibly at best it would be hotel but then again it s london value for money is ok and acceptable for the location around the corner from earls court station",
        "labels": 1,
        "rating": 4,
        "dates": "2022-03-09T13:33:50.000Z",
        "hotel_id": 74,
        "user_id": 97
    },
    {
        "id": 9722,
        "text": "breakfast is expensive at per person so hotel could do with another option coffee pastries cafe",
        "labels": 0,
        "rating": 2,
        "dates": "2022-03-29T15:50:52.000Z",
        "hotel_id": 2,
        "user_id": 83
    },
    {
        "id": 9723,
        "text": "spacious room comfortable bed fantastic shower and friendly staff",
        "labels": 1,
        "rating": 5,
        "dates": "2022-02-15T14:36:21.000Z",
        "hotel_id": 3,
        "user_id": 16
    },
    {
        "id": 9724,
        "text": "excellent customer service from reception staff who helped with booking museums restaurants etc",
        "labels": 1,
        "rating": 4,
        "dates": "2022-03-01T19:50:48.000Z",
        "hotel_id": 74,
        "user_id": 35
    },
    {
        "id": 9725,
        "text": "our room had a window looking into the atrium it was covered by a curtain and the other window looked into a dark alley so there was no natural light in the room but the biggest negative was the noise from the atrium early every morning when s guests returned from a night out the sounds from the atrium lobby were very loud in our room they should install some kind of sound absorbers to reduce the noise from the atrium",
        "labels": 0,
        "rating": 2,
        "dates": "2022-05-07T19:30:26.000Z",
        "hotel_id": 47,
        "user_id": 30
    },
    {
        "id": 9726,
        "text": "concierge missed a few bookings room service food is not good and made a few mistakes by sending wrong meal twice though they remedied it first time second time didn t have time to wait for the correct meal to come up",
        "labels": 0,
        "rating": 1,
        "dates": "2022-01-28T02:57:20.000Z",
        "hotel_id": 37,
        "user_id": 96
    },
    {
        "id": 9727,
        "text": "was near the tube mini bar was included",
        "labels": 1,
        "rating": 5,
        "dates": "2022-03-24T04:51:32.000Z",
        "hotel_id": 16,
        "user_id": 14
    },
    {
        "id": 9728,
        "text": "it was a good location and a good price",
        "labels": 1,
        "rating": 5,
        "dates": "2022-01-26T17:30:03.000Z",
        "hotel_id": 56,
        "user_id": 14
    },
    {
        "id": 9729,
        "text": "breakfast was less than average the worst in our week italian trip very budget stale pastries and overall very unappealing",
        "labels": 0,
        "rating": 1,
        "dates": "2022-04-13T05:44:40.000Z",
        "hotel_id": 57,
        "user_id": 8
    },
    {
        "id": 9730,
        "text": "relaxing atmosphere and helpful and pleasant staff",
        "labels": 1,
        "rating": 5,
        "dates": "2022-03-07T16:11:26.000Z",
        "hotel_id": 74,
        "user_id": 21
    },
    {
        "id": 9731,
        "text": "did not like the room i first got and they were good at assisting me to a better room and make sure i was happy",
        "labels": 1,
        "rating": 5,
        "dates": "2022-01-01T14:12:33.000Z",
        "hotel_id": 85,
        "user_id": 70
    },
    {
        "id": 9732,
        "text": "we were in late for breakfast no bacon available croissants were dry so ordered eggs benedict and poached eggs were hard so everything else about hotel was good except breakfast should be same whether you go in at or",
        "labels": 0,
        "rating": 3,
        "dates": "2022-01-17T11:27:47.000Z",
        "hotel_id": 63,
        "user_id": 35
    },
    {
        "id": 9733,
        "text": "reception personnel was very helpful and nice that s almost the only thing we liked besides good bed and bathroom",
        "labels": 1,
        "rating": 5,
        "dates": "2022-01-11T01:01:39.000Z",
        "hotel_id": 7,
        "user_id": 31
    },
    {
        "id": 9734,
        "text": "it was my daughters birthday there was cake gifts a card awaiting us in our room situated opposite a lovely park staff very nice smiley well worth a visit christmas tree was lovely",
        "labels": 1,
        "rating": 5,
        "dates": "2022-03-02T03:23:21.000Z",
        "hotel_id": 63,
        "user_id": 84
    },
    {
        "id": 9735,
        "text": "housekeeping should have been done everyday",
        "labels": 0,
        "rating": 2,
        "dates": "2022-02-02T19:23:40.000Z",
        "hotel_id": 67,
        "user_id": 98
    },
    {
        "id": 9736,
        "text": "not worth the money you pay stars hotel with no fittness center in it not even a swimimg pool maybe for a business trip its a fine hotel but not for leisure",
        "labels": 0,
        "rating": 2,
        "dates": "2022-03-13T21:39:33.000Z",
        "hotel_id": 98,
        "user_id": 6
    },
    {
        "id": 9737,
        "text": "good food comfy bed",
        "labels": 1,
        "rating": 5,
        "dates": "2022-03-22T12:00:20.000Z",
        "hotel_id": 18,
        "user_id": 78
    },
    {
        "id": 9738,
        "text": "could hear noise from the next room at times",
        "labels": 0,
        "rating": 2,
        "dates": "2022-01-09T08:07:23.000Z",
        "hotel_id": 92,
        "user_id": 94
    },
    {
        "id": 9739,
        "text": "lighting in our suite was over contrived and difficult to control bar prices were excessive and service below par noisy work being carried out in the room above not at all considerate",
        "labels": 0,
        "rating": 3,
        "dates": "2022-01-11T23:10:49.000Z",
        "hotel_id": 16,
        "user_id": 61
    },
    {
        "id": 9740,
        "text": "bed was lumpy",
        "labels": 0,
        "rating": 1,
        "dates": "2022-02-17T23:36:26.000Z",
        "hotel_id": 40,
        "user_id": 1
    },
    {
        "id": 9741,
        "text": "pillows too hard and only wine or beer for sale i would have preferred a gin or vodka",
        "labels": 0,
        "rating": 3,
        "dates": "2022-03-02T18:51:16.000Z",
        "hotel_id": 21,
        "user_id": 79
    },
    {
        "id": 9742,
        "text": "lack of parking no where to load or unload car",
        "labels": 0,
        "rating": 2,
        "dates": "2022-04-30T20:46:55.000Z",
        "hotel_id": 18,
        "user_id": 86
    },
    {
        "id": 9743,
        "text": "more pillow selection soft medium and hard",
        "labels": 0,
        "rating": 3,
        "dates": "2022-02-27T16:10:57.000Z",
        "hotel_id": 33,
        "user_id": 33
    },
    {
        "id": 9744,
        "text": "one of the few hotels to have a swimming pool",
        "labels": 1,
        "rating": 4,
        "dates": "2022-01-16T18:33:01.000Z",
        "hotel_id": 68,
        "user_id": 93
    },
    {
        "id": 9745,
        "text": "location area is very good",
        "labels": 1,
        "rating": 4,
        "dates": "2022-05-31T08:59:48.000Z",
        "hotel_id": 55,
        "user_id": 2
    },
    {
        "id": 9746,
        "text": "the floor carpet is very very dirty and needs to be changed i felt sick when saw the room floor",
        "labels": 0,
        "rating": 1,
        "dates": "2022-05-01T10:40:22.000Z",
        "hotel_id": 78,
        "user_id": 19
    },
    {
        "id": 9747,
        "text": "very decisive people simply thieves we called the police for them as they took a lot of extra money from us",
        "labels": 0,
        "rating": 2,
        "dates": "2022-03-08T13:25:26.000Z",
        "hotel_id": 71,
        "user_id": 53
    },
    {
        "id": 9748,
        "text": "as usual the lighting in the bathroom was insufficient to use the mirror and too far away actually the bathroom could ve been better designed altogether the temperature in the room was way too hot and the thermostat didn t work resorted to leaving the window wide open",
        "labels": 0,
        "rating": 3,
        "dates": "2022-02-25T00:55:16.000Z",
        "hotel_id": 74,
        "user_id": 31
    },
    {
        "id": 9749,
        "text": "value for money excellent buffet",
        "labels": 1,
        "rating": 4,
        "dates": "2022-01-13T08:43:16.000Z",
        "hotel_id": 72,
        "user_id": 94
    },
    {
        "id": 9750,
        "text": "the speed of wi fi is ridiculously slow i had to use my mobile phone as a hot spot to give wi fi to the lap top also the location of the bath is awkward the speed of wi fi is unacceptable",
        "labels": 0,
        "rating": 1,
        "dates": "2022-02-05T13:19:41.000Z",
        "hotel_id": 37,
        "user_id": 86
    },
    {
        "id": 9751,
        "text": "the location is perfect the staff really nice the rooms reall great for london",
        "labels": 1,
        "rating": 4,
        "dates": "2022-04-17T06:03:52.000Z",
        "hotel_id": 89,
        "user_id": 40
    },
    {
        "id": 9752,
        "text": "food and cocktails have gone down hill unfortunately i would rate but hotel is let down massively by below average food and drinks for a star hotel you would expect a much higher standard of food drinks cocktails are poor champagne cocktails served with flat cava a lot of the food was obviously cooked earlier in the day",
        "labels": 0,
        "rating": 3,
        "dates": "2022-01-27T03:32:30.000Z",
        "hotel_id": 71,
        "user_id": 86
    },
    {
        "id": 9753,
        "text": "excellent customer service super comfy bed stunning hotel",
        "labels": 1,
        "rating": 5,
        "dates": "2022-01-03T16:13:44.000Z",
        "hotel_id": 41,
        "user_id": 5
    },
    {
        "id": 9754,
        "text": "the bed was fine so was the breakfast",
        "labels": 1,
        "rating": 4,
        "dates": "2022-04-27T17:05:02.000Z",
        "hotel_id": 67,
        "user_id": 88
    },
    {
        "id": 9755,
        "text": "the atmosphere very cosy place nice staff nicely looking hotel and rooms easy to find not very far gare d austerlitz",
        "labels": 1,
        "rating": 4,
        "dates": "2022-03-03T23:07:55.000Z",
        "hotel_id": 22,
        "user_id": 38
    },
    {
        "id": 9756,
        "text": "fantastic friendly staff terrific location just near pere lachaise cemetery and close to metro very inexpensive clean lovely",
        "labels": 1,
        "rating": 5,
        "dates": "2022-04-25T12:08:49.000Z",
        "hotel_id": 84,
        "user_id": 89
    },
    {
        "id": 9757,
        "text": "no covered smoking area breakfast variation some renovated rooms and some not we got old ones rooms not as in the booking images",
        "labels": 0,
        "rating": 2,
        "dates": "2022-01-11T02:14:21.000Z",
        "hotel_id": 85,
        "user_id": 89
    },
    {
        "id": 9758,
        "text": "clean nice room location",
        "labels": 1,
        "rating": 4,
        "dates": "2022-02-09T13:10:33.000Z",
        "hotel_id": 78,
        "user_id": 37
    },
    {
        "id": 9759,
        "text": "very close to everything",
        "labels": 1,
        "rating": 5,
        "dates": "2022-03-02T04:37:08.000Z",
        "hotel_id": 39,
        "user_id": 9
    },
    {
        "id": 9760,
        "text": "comfortable beds helpful staff",
        "labels": 1,
        "rating": 5,
        "dates": "2022-04-22T20:37:02.000Z",
        "hotel_id": 39,
        "user_id": 27
    },
    {
        "id": 9761,
        "text": "great location excellent friendly efficient staff clean comfy bedrooms hotel car parking at reasonable rates what more could you ask",
        "labels": 1,
        "rating": 5,
        "dates": "2022-05-06T02:09:16.000Z",
        "hotel_id": 66,
        "user_id": 22
    },
    {
        "id": 9762,
        "text": "good location goog breakfast",
        "labels": 1,
        "rating": 5,
        "dates": "2022-02-18T16:15:08.000Z",
        "hotel_id": 89,
        "user_id": 39
    },
    {
        "id": 9763,
        "text": "we have no complaints and wouldn t change anything this hotel is outstanding",
        "labels": 0,
        "rating": 3,
        "dates": "2022-05-02T07:43:02.000Z",
        "hotel_id": 20,
        "user_id": 37
    },
    {
        "id": 9764,
        "text": "room size was very small for value",
        "labels": 0,
        "rating": 1,
        "dates": "2022-04-30T16:25:19.000Z",
        "hotel_id": 80,
        "user_id": 26
    },
    {
        "id": 9765,
        "text": "lack of information when we arrived about the paris marathon on the sunday which restricted most forms of transport a mention at check in or a card in the room would have been helpful",
        "labels": 0,
        "rating": 2,
        "dates": "2022-05-01T08:42:44.000Z",
        "hotel_id": 35,
        "user_id": 63
    },
    {
        "id": 9766,
        "text": "nothing at all",
        "labels": 1,
        "rating": 5,
        "dates": "2022-01-28T19:50:43.000Z",
        "hotel_id": 69,
        "user_id": 46
    },
    {
        "id": 9767,
        "text": "everything was thought about breakfast was amazing",
        "labels": 1,
        "rating": 4,
        "dates": "2022-01-28T09:57:56.000Z",
        "hotel_id": 31,
        "user_id": 18
    },
    {
        "id": 9768,
        "text": "friendly welcome comfortable room",
        "labels": 1,
        "rating": 4,
        "dates": "2022-02-24T22:20:04.000Z",
        "hotel_id": 52,
        "user_id": 66
    },
    {
        "id": 9769,
        "text": "we got very small and dark room there was hear noise from other rooms there is no cloakroom in spa we had only tiny sheet for cover when we asked for normal quilt then we got only scratchy cover eur deposit for spa towels and have to pay eur per day for safe box why we wanted have a coffee in hotel cafe but we were waiting about minutes without any effect there was two waiters behind bar",
        "labels": 0,
        "rating": 3,
        "dates": "2022-02-01T00:17:51.000Z",
        "hotel_id": 37,
        "user_id": 36
    },
    {
        "id": 9770,
        "text": "nowhere on the description on your site does it mention that this room is in the basement and the only window is a small opening in the ceiling this opening leads up to a window which is at ground level on the outside an adult could easily fit through this window and drop down onto the bed and take whatever you ve left in the room it was really difficult to lock we used a coat hanger to reach the latch the safe that was in the wardrobe is not fixed to the wall and could be picked up and removed there was supposed to be a fridge in the room but we had to ask for this as well as the bathrobes this room is not big enough for adults as you would expect from the photo to get to the bathroom you have to pass the bottom of the double bed at the other end of the room and if someone is getting something from the wardrobe you can t pass unless they move out of the way it was a struggle when we all showered before going out the guy on the desk spoke good english but when challenged about the room he at first looked blank then said he would speak to his manager which he never did the room smelt of stale cigarettes every time we entered and there were cigarette burns in the carpet even though it was a no smoking room i would not book this room again",
        "labels": 0,
        "rating": 3,
        "dates": "2022-02-03T10:59:11.000Z",
        "hotel_id": 100,
        "user_id": 40
    },
    {
        "id": 9771,
        "text": "good bed some of the staff really customer oriented good dinner at the lobby",
        "labels": 1,
        "rating": 4,
        "dates": "2022-02-17T22:43:21.000Z",
        "hotel_id": 8,
        "user_id": 69
    },
    {
        "id": 9772,
        "text": "big comfortable bed nice bathroom back of the hotel so quiet",
        "labels": 1,
        "rating": 5,
        "dates": "2022-04-22T05:41:17.000Z",
        "hotel_id": 16,
        "user_id": 46
    },
    {
        "id": 9773,
        "text": "location was good everything one needs is within reach",
        "labels": 1,
        "rating": 4,
        "dates": "2022-01-29T15:58:55.000Z",
        "hotel_id": 13,
        "user_id": 77
    },
    {
        "id": 9774,
        "text": "fridge located directly at bedside too noisy",
        "labels": 0,
        "rating": 1,
        "dates": "2022-03-25T16:25:40.000Z",
        "hotel_id": 88,
        "user_id": 43
    },
    {
        "id": 9775,
        "text": "the three days were very hot and it would have been good to have a small fridge in the room",
        "labels": 0,
        "rating": 3,
        "dates": "2022-05-08T16:53:31.000Z",
        "hotel_id": 55,
        "user_id": 95
    },
    {
        "id": 9776,
        "text": "not enough tea and milk in the room and maybe some biscuits would have been nice didn t have breakfast we thought it was too expensive",
        "labels": 0,
        "rating": 1,
        "dates": "2022-04-29T16:15:51.000Z",
        "hotel_id": 21,
        "user_id": 84
    },
    {
        "id": 9777,
        "text": "this hotel was rated as star i think this was a little bit high it felt like it needed a bit of a revamp to truly be worthy of stars",
        "labels": 0,
        "rating": 2,
        "dates": "2022-01-14T20:41:30.000Z",
        "hotel_id": 69,
        "user_id": 60
    },
    {
        "id": 9778,
        "text": "it is a really noisy hotel from the road outside with sirens and loud cars going all night the hotel has a small crane parked outside which was moved loudly at am on both the days i stayed this was not good the sockets in the room are not well positioned so i found it really hard to charge my phone and laptop as the sockets are so close to the desk top that the plugs did not fit in",
        "labels": 0,
        "rating": 3,
        "dates": "2022-03-01T22:58:31.000Z",
        "hotel_id": 64,
        "user_id": 20
    },
    {
        "id": 9779,
        "text": "location excellent as we caught the train from paris to milan",
        "labels": 1,
        "rating": 4,
        "dates": "2022-02-19T05:49:11.000Z",
        "hotel_id": 77,
        "user_id": 10
    },
    {
        "id": 9780,
        "text": "first room checked into had not been cleaned",
        "labels": 0,
        "rating": 1,
        "dates": "2022-01-08T10:06:42.000Z",
        "hotel_id": 77,
        "user_id": 93
    },
    {
        "id": 9781,
        "text": "location excellent room simple but spacious bed comfortable",
        "labels": 1,
        "rating": 5,
        "dates": "2022-04-09T21:10:58.000Z",
        "hotel_id": 37,
        "user_id": 55
    },
    {
        "id": 9782,
        "text": "aircon controls were impossible to work out and no instructions provided room was awesome but freezing could ve asked front desk but couldn t have handled the disruption even though they were lovely",
        "labels": 0,
        "rating": 3,
        "dates": "2022-04-25T12:23:24.000Z",
        "hotel_id": 70,
        "user_id": 51
    },
    {
        "id": 9783,
        "text": "the bed was comfortable and very nice breakfast and area the officers message was great",
        "labels": 1,
        "rating": 5,
        "dates": "2022-01-20T10:59:05.000Z",
        "hotel_id": 59,
        "user_id": 2
    },
    {
        "id": 9784,
        "text": "payed online but had to swipe card again and pay extra as deposit for just in case we took something from the room",
        "labels": 0,
        "rating": 2,
        "dates": "2022-03-06T06:01:43.000Z",
        "hotel_id": 67,
        "user_id": 73
    },
    {
        "id": 9785,
        "text": "placed perfect for everything location location great place to stay recommend to all that come to rome staff cannot do enough for you",
        "labels": 1,
        "rating": 5,
        "dates": "2022-01-05T23:32:01.000Z",
        "hotel_id": 17,
        "user_id": 53
    },
    {
        "id": 9786,
        "text": "from the moment we arrived and greeted by the bell boy who immediately took our cases into reception we felt this was a nice place to stay pleasant and helpful reception staff had us registered and in our room quickly the breakfast was a great choice of food pleasantly and efficiently served my request for help in checking a transfer with emirates was handled with courtesy and efficiency and followed up by an email left in our room confirming all the details the room though small provided adequate space for a night stay",
        "labels": 1,
        "rating": 5,
        "dates": "2022-05-07T18:57:35.000Z",
        "hotel_id": 96,
        "user_id": 28
    },
    {
        "id": 9787,
        "text": "excellent location great interior decor and very helpful friendly staff but what i liked the most was that breakfast was available until am i m not the earliest riser and it slightly annoys me when hotels set their breakfast up between am to am or something silly like that i was able to get up leisurely not set an alarm and toddle off to breakfast when i wanted to the breakfast was also amazing if i go back to vienna which i will because it s beautiful and we loved it i will stay at hotel capricorno",
        "labels": 1,
        "rating": 4,
        "dates": "2022-04-07T02:21:22.000Z",
        "hotel_id": 71,
        "user_id": 22
    },
    {
        "id": 9788,
        "text": "large rooms comfortable beds friendly staff and bar",
        "labels": 1,
        "rating": 4,
        "dates": "2022-03-31T07:25:43.000Z",
        "hotel_id": 67,
        "user_id": 59
    },
    {
        "id": 9789,
        "text": "the staff were all nice as well as the place is accessible to all transport and near to shopping malls we are satisfied with the hotel",
        "labels": 1,
        "rating": 5,
        "dates": "2022-01-10T13:51:21.000Z",
        "hotel_id": 1,
        "user_id": 77
    },
    {
        "id": 9790,
        "text": "rooms are small",
        "labels": 0,
        "rating": 3,
        "dates": "2022-01-01T18:46:58.000Z",
        "hotel_id": 72,
        "user_id": 8
    },
    {
        "id": 9791,
        "text": "no complaints actually",
        "labels": 0,
        "rating": 3,
        "dates": "2022-04-28T16:19:30.000Z",
        "hotel_id": 18,
        "user_id": 61
    },
    {
        "id": 9792,
        "text": "room smaller than what they look like on the pictures no tables in the room so had dinner in bed not that dramatic",
        "labels": 0,
        "rating": 3,
        "dates": "2022-01-24T16:22:37.000Z",
        "hotel_id": 35,
        "user_id": 91
    },
    {
        "id": 9793,
        "text": "the hotel feels tired and needs a makeover",
        "labels": 0,
        "rating": 3,
        "dates": "2022-04-03T12:21:46.000Z",
        "hotel_id": 41,
        "user_id": 49
    },
    {
        "id": 9794,
        "text": "big choice of breakfast nice design of the room free spa facilities possibility great location for those who have an event in arena park",
        "labels": 1,
        "rating": 4,
        "dates": "2022-01-11T22:33:23.000Z",
        "hotel_id": 63,
        "user_id": 73
    },
    {
        "id": 9795,
        "text": "old and not clean",
        "labels": 0,
        "rating": 2,
        "dates": "2022-01-28T08:37:52.000Z",
        "hotel_id": 46,
        "user_id": 93
    },
    {
        "id": 9796,
        "text": "very noisy room bad internet high price compared to facilities hotel does not match",
        "labels": 0,
        "rating": 3,
        "dates": "2022-04-10T06:17:04.000Z",
        "hotel_id": 52,
        "user_id": 13
    },
    {
        "id": 9797,
        "text": "staff were very good nothing was too much trouble great location close to metro station but also comfortable walking distance to las ramblas",
        "labels": 1,
        "rating": 5,
        "dates": "2022-03-19T04:11:46.000Z",
        "hotel_id": 20,
        "user_id": 51
    },
    {
        "id": 9798,
        "text": "location and king size bed",
        "labels": 1,
        "rating": 5,
        "dates": "2022-01-25T13:06:36.000Z",
        "hotel_id": 27,
        "user_id": 93
    },
    {
        "id": 9799,
        "text": "location staff ambiance",
        "labels": 1,
        "rating": 4,
        "dates": "2022-04-07T07:21:29.000Z",
        "hotel_id": 40,
        "user_id": 10
    },
    {
        "id": 9800,
        "text": "yet another hotel where the whims of designers who have clearly never stayed in a hotel have been give precedence over the comfort and convenience of guests by far the worst of several issues at the cumberland was the illuminated fridge which could not be turned off and which floodlit the room after we turned off the light to go to sleep how on earth do hotel managements allow this and similar design whims which ruin the stay for their guests",
        "labels": 0,
        "rating": 2,
        "dates": "2022-04-17T03:55:50.000Z",
        "hotel_id": 41,
        "user_id": 86
    },
    {
        "id": 9801,
        "text": "poor waiting staff at buffet no leadership staff mostly in different spoke to supervisor who offered no responsibility",
        "labels": 0,
        "rating": 2,
        "dates": "2022-01-11T21:50:26.000Z",
        "hotel_id": 68,
        "user_id": 35
    },
    {
        "id": 9802,
        "text": "we have had a free upgrade to a suite breakfast was very good",
        "labels": 1,
        "rating": 5,
        "dates": "2022-02-13T02:56:15.000Z",
        "hotel_id": 100,
        "user_id": 64
    },
    {
        "id": 9803,
        "text": "after check in the room we were allocated was no more than a rated accomadation the room was small and pokey the bathroom all be it clean was dated with cracked tiles and the bath panel need to go in the nearest skip and actual room was in desperate need of redecorating we complained and put a review immediately on trip adviser the assistant manager moved us the following day into a much nicer room",
        "labels": 0,
        "rating": 2,
        "dates": "2022-03-28T21:37:02.000Z",
        "hotel_id": 92,
        "user_id": 20
    },
    {
        "id": 9804,
        "text": "i really had no complaints about my stay the walls are a bit thin i could hear word for word conversations going on in rooms across the hall housekeeping didn t keep to much of a schedule because i swear she came earlier every day",
        "labels": 0,
        "rating": 1,
        "dates": "2022-01-18T01:19:19.000Z",
        "hotel_id": 28,
        "user_id": 82
    },
    {
        "id": 9805,
        "text": "nothing the worst best western i have ever stayed in it was dirty the carpets were dirty and the bathroom was broken chips to the marble and missing shower screen",
        "labels": 1,
        "rating": 5,
        "dates": "2022-02-27T12:15:10.000Z",
        "hotel_id": 1,
        "user_id": 11
    },
    {
        "id": 9806,
        "text": "good quality hotel in a good location the internet worked well and the bar was good too also many good places to eat nearby",
        "labels": 1,
        "rating": 4,
        "dates": "2022-01-14T11:27:27.000Z",
        "hotel_id": 96,
        "user_id": 89
    },
    {
        "id": 9807,
        "text": "there was one gripe which got sorted out very promptly when we arrived back after our day out the bathroom had a very foul smell coming from the drainage we called the desk and they sent someone right away who fixed it on the spot in a matter of minutes",
        "labels": 0,
        "rating": 3,
        "dates": "2022-02-03T12:39:33.000Z",
        "hotel_id": 51,
        "user_id": 54
    },
    {
        "id": 9808,
        "text": "the upstairs restaurant had a very limited menu ended up going out for dinner but theres plenty of choice nearby",
        "labels": 0,
        "rating": 3,
        "dates": "2022-03-27T10:35:22.000Z",
        "hotel_id": 56,
        "user_id": 65
    },
    {
        "id": 9809,
        "text": "room size perfect breakfast plus",
        "labels": 1,
        "rating": 4,
        "dates": "2022-02-16T22:45:27.000Z",
        "hotel_id": 20,
        "user_id": 59
    },
    {
        "id": 9810,
        "text": "the hotel is very well situated within easy walking distance to the embankment trafalgar square covent garden and theatre the staff were extremely helpful and polite the bedding and towels were very clean very enjoyable free nibbles with our night cap after the theatre",
        "labels": 1,
        "rating": 4,
        "dates": "2022-05-07T04:58:20.000Z",
        "hotel_id": 92,
        "user_id": 73
    },
    {
        "id": 9811,
        "text": "this was our nd stay at the hotel grums the rooms are spacious and clean and the big double bed was really comfy especially after sightseeing all day its modern and the staff are super friendly its a minute walk to the ramblas location is more residential but don t let this put you off as its quiet and ideal for the port",
        "labels": 1,
        "rating": 5,
        "dates": "2022-02-13T13:19:39.000Z",
        "hotel_id": 79,
        "user_id": 71
    },
    {
        "id": 9812,
        "text": "fabulous customer service means more than anything room and breakfast superb",
        "labels": 1,
        "rating": 5,
        "dates": "2022-01-27T13:16:12.000Z",
        "hotel_id": 32,
        "user_id": 91
    },
    {
        "id": 9813,
        "text": "correct",
        "labels": 1,
        "rating": 4,
        "dates": "2022-03-20T00:21:04.000Z",
        "hotel_id": 4,
        "user_id": 89
    },
    {
        "id": 9814,
        "text": "noise of aircon from backyard small rooms very cold in bathroom",
        "labels": 0,
        "rating": 1,
        "dates": "2022-02-20T21:30:47.000Z",
        "hotel_id": 49,
        "user_id": 36
    },
    {
        "id": 9815,
        "text": "the hotel is very nice with every things",
        "labels": 1,
        "rating": 5,
        "dates": "2022-02-05T22:25:42.000Z",
        "hotel_id": 49,
        "user_id": 22
    },
    {
        "id": 9816,
        "text": "a simply delightful hotel with lots of little extra rather old fashioned touches which are lovely for instance silver coffee pot at breakfast with silver cruet set all laid out on clean linen no help yourself it s all brought to you to order someone to greet you when you come downstairs great wi fi nice smell of soap in the bathroom",
        "labels": 1,
        "rating": 5,
        "dates": "2022-03-27T10:41:36.000Z",
        "hotel_id": 45,
        "user_id": 92
    },
    {
        "id": 9817,
        "text": "great hotel with a lovely room",
        "labels": 1,
        "rating": 4,
        "dates": "2022-04-29T19:42:40.000Z",
        "hotel_id": 55,
        "user_id": 98
    },
    {
        "id": 9818,
        "text": "tube station right next to it very convenient also a very safe area which helps as i was happy to be out at night with my teenage girl",
        "labels": 1,
        "rating": 4,
        "dates": "2022-03-11T08:22:25.000Z",
        "hotel_id": 13,
        "user_id": 87
    },
    {
        "id": 9819,
        "text": "the way it is managed and the staff is perfect breakfast is awesome",
        "labels": 1,
        "rating": 4,
        "dates": "2022-02-05T19:33:31.000Z",
        "hotel_id": 89,
        "user_id": 72
    },
    {
        "id": 9820,
        "text": "location and staff upon arrival",
        "labels": 1,
        "rating": 4,
        "dates": "2022-04-17T23:18:45.000Z",
        "hotel_id": 94,
        "user_id": 96
    },
    {
        "id": 9821,
        "text": "great location lovely hotel will stay again",
        "labels": 1,
        "rating": 5,
        "dates": "2022-03-25T20:34:05.000Z",
        "hotel_id": 16,
        "user_id": 63
    },
    {
        "id": 9822,
        "text": "very clean and comfortable everything i needed great location",
        "labels": 1,
        "rating": 5,
        "dates": "2022-03-07T08:08:04.000Z",
        "hotel_id": 70,
        "user_id": 82
    },
    {
        "id": 9823,
        "text": "the staff were simply the best i was upgraded to a jnr suite which was simply stunning they even let me stay in the room for a further hours to wait for for flight",
        "labels": 1,
        "rating": 4,
        "dates": "2022-04-24T06:28:37.000Z",
        "hotel_id": 78,
        "user_id": 7
    },
    {
        "id": 9824,
        "text": "the library room had interesting books",
        "labels": 1,
        "rating": 4,
        "dates": "2022-04-12T23:50:04.000Z",
        "hotel_id": 53,
        "user_id": 81
    },
    {
        "id": 9825,
        "text": "the behavior of staff is very very bad specially the fron desk can you believe we are in and the people they do not give iron bored to the guest or the can do any pressing the cloth after pm",
        "labels": 0,
        "rating": 3,
        "dates": "2022-01-15T21:01:38.000Z",
        "hotel_id": 92,
        "user_id": 46
    },
    {
        "id": 9826,
        "text": "we stay often at holiday inns and find them more than comfortable food excellent staff very helpful and friendly",
        "labels": 1,
        "rating": 5,
        "dates": "2022-04-18T03:21:40.000Z",
        "hotel_id": 54,
        "user_id": 18
    },
    {
        "id": 9827,
        "text": "it was hard to get the temperature right in the shower kept going from boiling to freezing at the slightest adjustment the bed wasn t the most comfortable",
        "labels": 0,
        "rating": 2,
        "dates": "2022-05-02T18:08:33.000Z",
        "hotel_id": 50,
        "user_id": 57
    },
    {
        "id": 9828,
        "text": "the staff was extremely pleasant and helpful",
        "labels": 1,
        "rating": 5,
        "dates": "2022-05-10T15:55:18.000Z",
        "hotel_id": 8,
        "user_id": 61
    },
    {
        "id": 9829,
        "text": "i like the ambiance of the hotel spacious room dan wifi connection was very fast",
        "labels": 1,
        "rating": 5,
        "dates": "2022-05-09T04:28:23.000Z",
        "hotel_id": 80,
        "user_id": 50
    },
    {
        "id": 9830,
        "text": "useful location for where we needed to be",
        "labels": 1,
        "rating": 5,
        "dates": "2022-03-12T08:58:44.000Z",
        "hotel_id": 63,
        "user_id": 88
    },
    {
        "id": 9831,
        "text": "rooms a little small compared to similar hotels",
        "labels": 0,
        "rating": 3,
        "dates": "2022-01-06T02:05:11.000Z",
        "hotel_id": 20,
        "user_id": 33
    },
    {
        "id": 9832,
        "text": "we found this hotel faultless location was excellent only a couple minutes from the underground and the greenwich attractions a minute walk room had adjustable air conditioning and free soft drinks in mini bar stocked daily espresso machine comfy bed and great view fantastic hotel",
        "labels": 1,
        "rating": 4,
        "dates": "2022-05-05T04:51:47.000Z",
        "hotel_id": 61,
        "user_id": 11
    },
    {
        "id": 9833,
        "text": "corridors are a bit old fashioned",
        "labels": 0,
        "rating": 2,
        "dates": "2022-02-22T00:15:35.000Z",
        "hotel_id": 2,
        "user_id": 79
    },
    {
        "id": 9834,
        "text": "there were a lot of stairs to get to our room at the end of the day although this was offset by being in an very old and lovely building",
        "labels": 0,
        "rating": 3,
        "dates": "2022-04-02T21:48:43.000Z",
        "hotel_id": 13,
        "user_id": 86
    },
    {
        "id": 9835,
        "text": "the bed frame cracked on our last night so my husband ended up sleeping on the floor there were no other rooms available it was unfortunate the manager apologized and offered a discount when we are next in paris as it turns out we were returning days later the discount was not really a discount cheaper rates on line so we stuck with our other reservation",
        "labels": 0,
        "rating": 3,
        "dates": "2022-03-10T01:04:45.000Z",
        "hotel_id": 38,
        "user_id": 7
    },
    {
        "id": 9836,
        "text": "bigger room it was cute but cramped",
        "labels": 0,
        "rating": 1,
        "dates": "2022-05-11T21:22:24.000Z",
        "hotel_id": 7,
        "user_id": 95
    },
    {
        "id": 9837,
        "text": "general upkeep needed attention",
        "labels": 0,
        "rating": 1,
        "dates": "2022-02-11T08:30:22.000Z",
        "hotel_id": 87,
        "user_id": 2
    },
    {
        "id": 9838,
        "text": "the hotel is new modern and with large rooms it also looked very clean good bathroom and shower quiet great value for london location might seem bad cause it s not a rich area but shadwell station is actually minutes away and gets you to central london very easily personally i had no trouble walking even alone at night and one time i walked from whitechapel station which is a bit further away",
        "labels": 1,
        "rating": 4,
        "dates": "2022-03-30T06:51:24.000Z",
        "hotel_id": 15,
        "user_id": 17
    },
    {
        "id": 9839,
        "text": "room could have been cleaned a bit more thoroughly",
        "labels": 0,
        "rating": 2,
        "dates": "2022-04-30T06:58:47.000Z",
        "hotel_id": 5,
        "user_id": 62
    },
    {
        "id": 9840,
        "text": "we were given a complimentary upgrade to a suite the receptionist was delightful",
        "labels": 1,
        "rating": 5,
        "dates": "2022-04-24T01:16:18.000Z",
        "hotel_id": 19,
        "user_id": 37
    },
    {
        "id": 9841,
        "text": "there was a cold breeze from the windows had to call to reception because we was cold and he brought an additional heater the thermostat heater wasn t working hairs on the bath robes were a bit rough and cardboard like the bed wasn t too comfy either we both had sore necks the next day bathroom door was hard to shut light above dresser wasn t working",
        "labels": 0,
        "rating": 3,
        "dates": "2022-04-08T23:22:02.000Z",
        "hotel_id": 8,
        "user_id": 74
    },
    {
        "id": 9842,
        "text": "terrible wifi almost unusable hotel feels a little bit old",
        "labels": 0,
        "rating": 3,
        "dates": "2022-05-02T06:42:12.000Z",
        "hotel_id": 66,
        "user_id": 76
    },
    {
        "id": 9843,
        "text": "location friendly helpful staff and a very good price",
        "labels": 1,
        "rating": 4,
        "dates": "2022-01-08T10:18:13.000Z",
        "hotel_id": 81,
        "user_id": 68
    },
    {
        "id": 9844,
        "text": "the suite was perfect staff were always happy to help if you needed anything or wanted to know something they especially helped my out with leaving a message in the room to surprise my partner",
        "labels": 1,
        "rating": 4,
        "dates": "2022-01-16T16:46:06.000Z",
        "hotel_id": 99,
        "user_id": 13
    },
    {
        "id": 9845,
        "text": "it took us about minutes to get to amsterdam center via public transportation we always took the fastest route using google maps",
        "labels": 0,
        "rating": 1,
        "dates": "2022-05-01T14:53:31.000Z",
        "hotel_id": 57,
        "user_id": 52
    },
    {
        "id": 9846,
        "text": "the staff were amazing very friendly and extremely helpful we got a free up grade and a bottle of prosecco the room was very spacious and had its own kitchenette a large window and an extra large bed",
        "labels": 1,
        "rating": 5,
        "dates": "2022-03-15T00:58:12.000Z",
        "hotel_id": 96,
        "user_id": 2
    },
    {
        "id": 9847,
        "text": "doorway is too tight but everything is ok",
        "labels": 0,
        "rating": 2,
        "dates": "2022-05-11T19:14:26.000Z",
        "hotel_id": 82,
        "user_id": 32
    },
    {
        "id": 9848,
        "text": "good location next to metro",
        "labels": 1,
        "rating": 5,
        "dates": "2022-03-04T03:05:05.000Z",
        "hotel_id": 83,
        "user_id": 31
    },
    {
        "id": 9849,
        "text": "room was lovely although a little small service was excellent",
        "labels": 1,
        "rating": 5,
        "dates": "2022-01-30T02:10:09.000Z",
        "hotel_id": 59,
        "user_id": 47
    },
    {
        "id": 9850,
        "text": "staff was very helpful and pleasant i would recommend this hotel to all that is planning on visiting london uk they offered valet parking which was awesome",
        "labels": 1,
        "rating": 4,
        "dates": "2022-05-02T13:33:16.000Z",
        "hotel_id": 23,
        "user_id": 8
    },
    {
        "id": 9851,
        "text": "room had a view of city skyline there was onsite parking breakfast buffet had varied menu",
        "labels": 1,
        "rating": 4,
        "dates": "2022-04-25T17:03:26.000Z",
        "hotel_id": 41,
        "user_id": 21
    },
    {
        "id": 9852,
        "text": "the breakfast had a lot of choice and the location was great",
        "labels": 1,
        "rating": 5,
        "dates": "2022-04-17T10:12:04.000Z",
        "hotel_id": 14,
        "user_id": 82
    },
    {
        "id": 9853,
        "text": "very small room and no sound isolation you feel you are sleeping in the street",
        "labels": 0,
        "rating": 2,
        "dates": "2022-01-05T23:00:34.000Z",
        "hotel_id": 10,
        "user_id": 28
    },
    {
        "id": 9854,
        "text": "stuck on level due to hotel full lifts full no access to stairs",
        "labels": 0,
        "rating": 3,
        "dates": "2022-03-16T20:48:48.000Z",
        "hotel_id": 51,
        "user_id": 40
    },
    {
        "id": 9855,
        "text": "there wasn t any street noise but there was a really persistent noise that went on throughout the night not sure if it was from the metro line below or an inconsiderate neighbour above i didn t sleep well at all so i m not sure i would go back as i don t mind a small room but i need sleep",
        "labels": 0,
        "rating": 2,
        "dates": "2022-02-16T19:53:08.000Z",
        "hotel_id": 22,
        "user_id": 94
    },
    {
        "id": 9856,
        "text": "the standard of the staff",
        "labels": 0,
        "rating": 3,
        "dates": "2022-02-23T10:15:34.000Z",
        "hotel_id": 10,
        "user_id": 88
    },
    {
        "id": 9878,
        "text": "nice hotel",
        "labels": 1,
        "rating": 3,
        "dates": "2022-06-04T06:53:16.000Z",
        "hotel_id": 1,
        "user_id": 128
    },
    {
        "id": 9879,
        "text": "the door makes stupid sound",
        "labels": 0,
        "rating": 2,
        "dates": "2022-06-04T09:31:59.000Z",
        "hotel_id": 21,
        "user_id": 131
    }
]
```
- Find Reviews By Hotel Id
>https://review-ywu6raktuq-uc.a.run.app/reviews

- Required
>/{hotelId} as [interger]?page&offset

- Example Request
>curl --location -g --request GET 'https://review-ywu6raktuq-uc.a.run.app/reviews/{{hotelId}}?page&offset'

This endpoint is to list all reviews regarding to specific hotelId
```javascript
{
    "message": "successful",
    "total": 101,
    "data": [
        {
            "id": 1,
            "text": "the staff were lovely and it is a good location",
            "labels": 1,
            "rating": 4,
            "dates": "2022-01-05T08:02:44.000Z",
            "user_id": 6,
            "name": "Ellis Saptono"
        },
        {
            "id": 63,
            "text": "high quality free wifi free water in the fridge one can ask for a breakfast bag to be delivered at the door in the morning great time saver great interior design concept",
            "labels": 1,
            "rating": 4,
            "dates": "2022-05-15T05:09:00.000Z",
            "user_id": 10,
            "name": "dr. Cakrabuana Marpaung, M.M."
        },
        {
            "id": 267,
            "text": "parking was a bit expensive and the bar was way too small you can park down the road for euros a day we used the park and ride on the u at kendalstrasse which was easy and probably much less of a struggle than trying to get into the city centre",
            "labels": 0,
            "rating": 2,
            "dates": "2022-03-27T14:41:44.000Z",
            "user_id": 62,
            "name": "Safina Prasetyo"
        },
        {
            "id": 299,
            "text": "i couldn t think of anything like that",
            "labels": 0,
            "rating": 1,
            "dates": "2022-03-11T05:05:49.000Z",
            "user_id": 22,
            "name": "Jinawi Natsir"
        },
        {
            "id": 379,
            "text": "carpets in novotel were disgusting very very stained and dirty had to keep shoes on this was a shame as hotel was good beds comfortable but stained chairs and carpets let it down",
            "labels": 0,
            "rating": 2,
            "dates": "2022-03-09T06:29:11.000Z",
            "user_id": 13,
            "name": "Pardi Nasyidah"
        },
        {
            "id": 562,
            "text": "great location nice and safe the hotel was getting renovated when we stayed ther i would recommend it to anybody",
            "labels": 1,
            "rating": 5,
            "dates": "2022-01-09T17:02:10.000Z",
            "user_id": 88,
            "name": "Sabrina Prasetya"
        },
        {
            "id": 571,
            "text": "liked the atmosphere at night as the place turned into a hotspot having a club and a lounge bar",
            "labels": 1,
            "rating": 4,
            "dates": "2022-04-20T13:00:40.000Z",
            "user_id": 5,
            "name": "Rahmat Maulana"
        },
        {
            "id": 599,
            "text": "the bed large enough which is good",
            "labels": 1,
            "rating": 3.5,
            "dates": "2022-05-26T12:27:24.000Z",
            "user_id": 54,
            "name": "Ir. Gina Sihombing"
        },
        {
            "id": 686,
            "text": "as allways wifi could be faster",
            "labels": 0,
            "rating": 3,
            "dates": "2022-02-03T18:02:20.000Z",
            "user_id": 9,
            "name": "Yuliana Megantara"
        },
        {
            "id": 704,
            "text": "great hotel and idea all works well",
            "labels": 1,
            "rating": 4,
            "dates": "2022-01-04T05:24:14.000Z",
            "user_id": 65,
            "name": "Taufik Sihombing"
        },
        {
            "id": 711,
            "text": "noise of traffic acoustics not sorted shower not working properly",
            "labels": 0,
            "rating": 2,
            "dates": "2022-05-09T07:27:57.000Z",
            "user_id": 64,
            "name": "Dipa Simbolon"
        },
        {
            "id": 747,
            "text": "lovely spa included very comfortabe rooms also enjoyed coffee tea in the room as the hotelbreakfast is overly expensive",
            "labels": 1,
            "rating": 5,
            "dates": "2022-01-09T09:08:30.000Z",
            "user_id": 98,
            "name": "R. Maya Mangunsong, M.Pd"
        },
        {
            "id": 792,
            "text": "nothing can be done about this but it was very difficult dealing with non native english speaking housekeeping staff we didn t have facecloths in our room and when i first mentioned it to the front desk in the evening because the housekeeping staff had left the fellow who brought me over something brought me towels and said he didn t know where the facecloths were i attempted again the second day to get facecloths and eventually got them but after i got them every day when housekeeping was done they were never replenished for the days of our stay even though everything else was is it unusual to have facecloths along with bath and hand towels in london also the letter about the club service needs to be updated the letter said we could get breakfast in the lounge until a m but when i inquired at the front desk they said the lounge was only available from p m also coming from a scent free environment i found the product used on the carpet in our building very strong",
            "labels": 0,
            "rating": 1,
            "dates": "2022-02-07T14:29:42.000Z",
            "user_id": 27,
            "name": "Okto Budiman, S.T."
        },
        {
            "id": 977,
            "text": "room is very basic housekeeping can improve room service can improve too far from subway",
            "labels": 0,
            "rating": 2,
            "dates": "2022-04-19T19:36:21.000Z",
            "user_id": 26,
            "name": "Malik Haryanto"
        },
        {
            "id": 1351,
            "text": "bathing cubicle does not have sliding door hence we had to request for extra floor mat to prevent flooding",
            "labels": 0,
            "rating": 1,
            "dates": "2022-03-25T23:12:19.000Z",
            "user_id": 31,
            "name": "H. Kajen Sitorus"
        },
        {
            "id": 1374,
            "text": "possibly a staff member in the dining room for breakfast explaining to guests how the self service system works",
            "labels": 0,
            "rating": 3,
            "dates": "2022-03-10T06:26:22.000Z",
            "user_id": 97,
            "name": "Titi Laksita"
        },
        {
            "id": 1453,
            "text": "great location and very helpful staff bar was closed for all of august but plenty of local bars around rooms are small but very clean and have all you need",
            "labels": 1,
            "rating": 5,
            "dates": "2022-03-01T18:04:12.000Z",
            "user_id": 40,
            "name": "Hj. Yance Farida"
        },
        {
            "id": 1501,
            "text": "great remote location just on the outskirt of wien but close enough to wien center great motivated staff good breakfast buffet choice and diverse lunch and dinner menu value for money for spacious rooms with practical bathroom and feels more like a castle than your usual hotel atmosphere",
            "labels": 1,
            "rating": 5,
            "dates": "2022-04-16T21:25:29.000Z",
            "user_id": 74,
            "name": "Ridwan Hastuti, M.Pd"
        },
        {
            "id": 1529,
            "text": "room small and shower room even smaller",
            "labels": 0,
            "rating": 3,
            "dates": "2022-05-14T00:00:13.000Z",
            "user_id": 35,
            "name": "Belinda Mulyani"
        },
        {
            "id": 1828,
            "text": "the location was a bit out of the way we had to get a tram to the centre bar service can be a bit slow at times also a bit expensive but no more so that the other hotels in what is an expensive city",
            "labels": 0,
            "rating": 1,
            "dates": "2022-05-06T04:41:34.000Z",
            "user_id": 63,
            "name": "Lega Putra, S.Sos"
        },
        {
            "id": 1961,
            "text": "found staff very helpful food was very good plenty to choose from hotel very clean",
            "labels": 1,
            "rating": 4,
            "dates": "2022-04-21T06:07:22.000Z",
            "user_id": 100,
            "name": "Utama Wulandari"
        },
        {
            "id": 2062,
            "text": "the value for money was the greatest i ve seen during our trip for barcelona at least with the booking genius price the stuff was really helpful and we could store our luggage both on very early arrival and a very late leave location was good for taking a bus to the airport",
            "labels": 1,
            "rating": 4,
            "dates": "2022-05-09T05:43:56.000Z",
            "user_id": 8,
            "name": "Cahyo Natsir"
        },
        {
            "id": 2075,
            "text": "staff are very polite and hotel is so clean location is perfect",
            "labels": 1,
            "rating": 5,
            "dates": "2022-02-28T16:49:19.000Z",
            "user_id": 28,
            "name": "Tgk. Yuliana Wahyudin, M.Ak"
        },
        {
            "id": 2170,
            "text": "not much amenities",
            "labels": 0,
            "rating": 1,
            "dates": "2022-03-12T10:24:33.000Z",
            "user_id": 58,
            "name": "Queen Pangestu"
        },
        {
            "id": 2307,
            "text": "welcome on reception",
            "labels": 1,
            "rating": 4,
            "dates": "2022-01-09T04:02:33.000Z",
            "user_id": 48,
            "name": "Parman Manullang"
        },
        {
            "id": 2334,
            "text": "the hotel is good location is very nice close to metro and to train station from where it s possible to take also bus or express to airports staff is very friendly and polite the room was good free mini bar gowns and slippers tea kettle with several types of tea plus some biscuits and sweets made our stay very comfortable surely recommend this hotel",
            "labels": 1,
            "rating": 4,
            "dates": "2022-03-11T01:00:10.000Z",
            "user_id": 33,
            "name": "Gatot Sihombing"
        },
        {
            "id": 2446,
            "text": "we booked a double bed but were given singles but they gave us free breakfast as compensation so it wasnt to bad",
            "labels": 0,
            "rating": 2,
            "dates": "2022-01-08T16:29:31.000Z",
            "user_id": 30,
            "name": "Faizah Mandala"
        },
        {
            "id": 2569,
            "text": "the bar man wasn t very nice and we did not feel welcome",
            "labels": 0,
            "rating": 2,
            "dates": "2022-01-19T20:09:13.000Z",
            "user_id": 51,
            "name": "Ganep Manullang"
        },
        {
            "id": 3065,
            "text": "the location was close to a train station and the place where i had business it was within walking distance excellent wifi connection",
            "labels": 1,
            "rating": 5,
            "dates": "2022-03-12T03:34:06.000Z",
            "user_id": 32,
            "name": "Najwa Wasita, M.Kom."
        },
        {
            "id": 3097,
            "text": "relaxed friendly staff lovely atmosphere",
            "labels": 1,
            "rating": 4,
            "dates": "2022-02-18T23:20:08.000Z",
            "user_id": 87,
            "name": "Tgk. Zizi Usada, M.Farm"
        },
        {
            "id": 3256,
            "text": "not much facilities since its a boutique style hotel",
            "labels": 0,
            "rating": 3,
            "dates": "2022-04-21T17:28:26.000Z",
            "user_id": 90,
            "name": "Jamalia Puspita"
        },
        {
            "id": 3290,
            "text": "key location",
            "labels": 1,
            "rating": 4,
            "dates": "2022-02-18T18:00:15.000Z",
            "user_id": 4,
            "name": "Anom Sudiati, M.Pd"
        },
        {
            "id": 3339,
            "text": "very good location close to paddington station kensington park and walkable mins to piccadilly area generally smaller rooms than expected but we did ask for a lighter brighter room with views out the front when we booked and they gave us a better room than originally available",
            "labels": 1,
            "rating": 4,
            "dates": "2022-04-08T01:05:37.000Z",
            "user_id": 16,
            "name": "Devi Prastuti"
        },
        {
            "id": 3455,
            "text": "room is kind of small very noisy air conditioner even found some trash on the floor after check in breakfast doesn t seem to worth the price at all",
            "labels": 0,
            "rating": 1,
            "dates": "2022-03-05T20:32:27.000Z",
            "user_id": 81,
            "name": "Ajimin Waskita"
        },
        {
            "id": 3459,
            "text": "no pool or rooftop area or proper evening restaurant",
            "labels": 0,
            "rating": 1,
            "dates": "2022-01-18T18:04:40.000Z",
            "user_id": 80,
            "name": "Zelda Gunarto, S.H."
        },
        {
            "id": 3490,
            "text": "location although difficult or impossible to approach in private car",
            "labels": 1,
            "rating": 5,
            "dates": "2022-02-17T20:54:28.000Z",
            "user_id": 72,
            "name": "Gangsa Santoso"
        },
        {
            "id": 3664,
            "text": "room shower and location",
            "labels": 1,
            "rating": 5,
            "dates": "2022-05-08T17:50:57.000Z",
            "user_id": 82,
            "name": "Prayogo Budiyanto"
        },
        {
            "id": 3669,
            "text": "booking website says that has parking but actually has not we must use public parking in las ramblas euros days please change your website wifi is really slow in the room floor",
            "labels": 0,
            "rating": 3,
            "dates": "2022-01-26T23:12:27.000Z",
            "user_id": 44,
            "name": "Aisyah Sitorus, M.Farm"
        },
        {
            "id": 3851,
            "text": "bed and jaccuzi added comfort",
            "labels": 1,
            "rating": 5,
            "dates": "2022-05-15T22:39:41.000Z",
            "user_id": 25,
            "name": "KH. Vero Farida, M.Pd"
        },
        {
            "id": 3902,
            "text": "a little way out from central amsterdam but close to metro station so manageable if you purchase a travel card",
            "labels": 0,
            "rating": 1,
            "dates": "2022-01-20T10:23:58.000Z",
            "user_id": 68,
            "name": "Hadi Ramadan"
        },
        {
            "id": 3930,
            "text": "the gym facilities were very poor its basically just a room with a couple of pieces of equipment",
            "labels": 0,
            "rating": 2,
            "dates": "2022-01-18T12:07:41.000Z",
            "user_id": 67,
            "name": "Jaya Zulaika"
        },
        {
            "id": 4079,
            "text": "great location friendly staff bed was very comfortable",
            "labels": 1,
            "rating": 5,
            "dates": "2022-05-01T08:17:05.000Z",
            "user_id": 43,
            "name": "R.M. Hari Halim"
        },
        {
            "id": 4119,
            "text": "limited tv channels",
            "labels": 0,
            "rating": 1,
            "dates": "2022-04-15T04:51:22.000Z",
            "user_id": 15,
            "name": "Uda Mardhiyah"
        },
        {
            "id": 4164,
            "text": "the bathroom was like a sauna heating on full blast and no way to turn it off the lift is too small to take a pram hall ways are too narrow i had to walk like a crab with pram and car seat and the room is small",
            "labels": 0,
            "rating": 2,
            "dates": "2022-05-05T04:35:06.000Z",
            "user_id": 23,
            "name": "Gabriella Namaga"
        },
        {
            "id": 4222,
            "text": "good service good place",
            "labels": 0,
            "rating": 3,
            "dates": "2022-04-24T23:11:46.000Z",
            "user_id": 92,
            "name": "Maya Haryanti"
        },
        {
            "id": 4586,
            "text": "two visits cleanish but not close eye for detail grubby wall dirty cup",
            "labels": 0,
            "rating": 1,
            "dates": "2022-03-17T09:48:54.000Z",
            "user_id": 19,
            "name": "Jasmin Suryono"
        },
        {
            "id": 5128,
            "text": "i like the amazing staff and the hotel is very clean",
            "labels": 1,
            "rating": 4,
            "dates": "2022-03-04T01:39:19.000Z",
            "user_id": 76,
            "name": "Dt. Hendra Purnawati, S.Pd"
        },
        {
            "id": 5254,
            "text": "there was no heating cold room",
            "labels": 0,
            "rating": 3,
            "dates": "2022-01-17T06:41:18.000Z",
            "user_id": 18,
            "name": "T. Laksana Wastuti, S.Ked"
        },
        {
            "id": 5370,
            "text": "the hotel was really clean and modern in a brilliant location couldn t have asked for a better spot the staff were friendly and attentive",
            "labels": 1,
            "rating": 5,
            "dates": "2022-02-06T08:54:16.000Z",
            "user_id": 77,
            "name": "Ifa Saptono, S.E."
        },
        {
            "id": 5423,
            "text": "noise traffic n othrr rooms",
            "labels": 0,
            "rating": 1,
            "dates": "2022-03-16T07:39:07.000Z",
            "user_id": 53,
            "name": "Nadia Najmudin"
        },
        {
            "id": 5555,
            "text": "such a beautiful hotel very well located tube very close rooms small but clean and comfy i loved it",
            "labels": 1,
            "rating": 4,
            "dates": "2022-03-31T10:05:09.000Z",
            "user_id": 50,
            "name": "R. Queen Nuraini, M.Ak"
        },
        {
            "id": 5580,
            "text": "location staff helpfulness",
            "labels": 1,
            "rating": 4,
            "dates": "2022-01-06T12:07:52.000Z",
            "user_id": 69,
            "name": "Ani Nugroho"
        },
        {
            "id": 5728,
            "text": "it was in each reach of major metro that linked to most networks restaurants close by",
            "labels": 1,
            "rating": 5,
            "dates": "2022-05-08T01:29:12.000Z",
            "user_id": 66,
            "name": "Hesti Tarihoran"
        },
        {
            "id": 5950,
            "text": "enough clean to feel good",
            "labels": 0,
            "rating": 3,
            "dates": "2022-03-12T19:02:52.000Z",
            "user_id": 78,
            "name": "Rahman Salahudin, S.Psi"
        },
        {
            "id": 5996,
            "text": "the dining room fantastic",
            "labels": 1,
            "rating": 5,
            "dates": "2022-05-04T05:29:36.000Z",
            "user_id": 21,
            "name": "Belinda Mulyani"
        },
        {
            "id": 6018,
            "text": "issues with a suite that we booked it wasn t provided and a refund was not offered this caused disappointment and upset and extra money spent has been wasted very disappointed",
            "labels": 0,
            "rating": 3,
            "dates": "2022-01-12T13:56:02.000Z",
            "user_id": 20,
            "name": "dr. Nyana Rajata, S.T."
        },
        {
            "id": 6082,
            "text": "location was excellent but this is not an easy drive up to hotel be prepared to walk in from a plaza area staff are available to help you with your bags to get back to the curb for a taxi pick up very central location for sightseeing tours buses and the subway",
            "labels": 1,
            "rating": 4,
            "dates": "2022-02-08T07:57:24.000Z",
            "user_id": 37,
            "name": "Sutan Jono Kusmawati"
        },
        {
            "id": 6338,
            "text": "air condition was so noisy we did not sleep room cleaning is not enough staff is ok",
            "labels": 0,
            "rating": 1,
            "dates": "2022-01-28T13:48:41.000Z",
            "user_id": 60,
            "name": "Harjaya Hutapea"
        },
        {
            "id": 6580,
            "text": "extensive restorations works going on we had scaffolding outside our window blocking the view temporary reception area the building is an old hospital you can still see the hospital aspects on the inside when the work is completed i m sure it will be fabulous no fridge in the room well there was one but it was very ineffective",
            "labels": 0,
            "rating": 1,
            "dates": "2022-04-25T15:31:41.000Z",
            "user_id": 56,
            "name": "Artawan Pranowo"
        },
        {
            "id": 6650,
            "text": "great hotel but far too busy on the evening",
            "labels": 1,
            "rating": 5,
            "dates": "2022-04-11T14:51:55.000Z",
            "user_id": 45,
            "name": "Hardana Budiyanto"
        },
        {
            "id": 6668,
            "text": "for renassaince group it is very poor staff no help",
            "labels": 0,
            "rating": 2,
            "dates": "2022-03-20T21:48:16.000Z",
            "user_id": 49,
            "name": "Ajeng Wasita"
        },
        {
            "id": 6752,
            "text": "bathroom just wasnt up to scratch shower screen missing and damage to basin badly repaired i wouldn t have this at home let alone pay for it",
            "labels": 0,
            "rating": 3,
            "dates": "2022-03-01T22:50:43.000Z",
            "user_id": 12,
            "name": "Luwar Wulandari"
        },
        {
            "id": 6836,
            "text": "although there was air conditioning i would have preferred a window to open",
            "labels": 0,
            "rating": 1,
            "dates": "2022-03-12T19:47:20.000Z",
            "user_id": 41,
            "name": "Hafshah Yulianti"
        },
        {
            "id": 6845,
            "text": "we have persons when i booking on this website they described this suite have two bedrooms but in fact only use transparent curtain to separate bed and lounge where put small sofa bed it is totally wrong info from booking com so we have to take one more suite when we checking in the outside of the hotel is terrible dirty and not safe feeling but near to airport and exhibition it is good for me",
            "labels": 0,
            "rating": 2,
            "dates": "2022-02-13T11:43:02.000Z",
            "user_id": 99,
            "name": "Cut Clara Susanti"
        },
        {
            "id": 6893,
            "text": "wasn t as close to the underground station as it was advertised and not too many restaurants and cafes near it had to walk quite away or take taxi to get to most places also room service menu could be improved with more options",
            "labels": 0,
            "rating": 2,
            "dates": "2022-01-30T16:49:37.000Z",
            "user_id": 95,
            "name": "Estiono Prabowo"
        },
        {
            "id": 6984,
            "text": "my favorite hotel in amsterdam if it is available when i am traveling i will always stay there",
            "labels": 1,
            "rating": 5,
            "dates": "2022-01-07T06:39:47.000Z",
            "user_id": 85,
            "name": "Sabar Salahudin"
        },
        {
            "id": 7096,
            "text": "we were surprised that the hotel did not provide food after hours perhaps consider a simple light bite in room menu but they recommended a takeaway shop and arranged delivery for us",
            "labels": 0,
            "rating": 2,
            "dates": "2022-02-02T18:48:20.000Z",
            "user_id": 3,
            "name": "dr. Balamantri Kuswandari"
        },
        {
            "id": 7189,
            "text": "hotel is very accessible good quality friendly and very approachable staff immaculate rooms and equipped fir your needs",
            "labels": 1,
            "rating": 5,
            "dates": "2022-01-01T22:01:37.000Z",
            "user_id": 24,
            "name": "Yunita Sitompul"
        },
        {
            "id": 7207,
            "text": "the breakfest celections could have been better",
            "labels": 0,
            "rating": 1,
            "dates": "2022-05-03T14:16:23.000Z",
            "user_id": 34,
            "name": "Mariadi Latupono"
        },
        {
            "id": 7249,
            "text": "near doumo staf at resturant calm",
            "labels": 1,
            "rating": 5,
            "dates": "2022-03-10T05:39:32.000Z",
            "user_id": 39,
            "name": "Karna Saragih"
        },
        {
            "id": 7485,
            "text": "bar open a little later",
            "labels": 0,
            "rating": 1,
            "dates": "2022-02-07T16:19:06.000Z",
            "user_id": 75,
            "name": "Tami Lestari"
        },
        {
            "id": 7559,
            "text": "i must say that they are very serious regarding the cleanliness and respectfull of the pivacy",
            "labels": 1,
            "rating": 5,
            "dates": "2022-05-06T16:14:33.000Z",
            "user_id": 91,
            "name": "Erik Prakasa"
        },
        {
            "id": 7600,
            "text": "many thanks for carlos at the front desk very helpful and friendly",
            "labels": 1,
            "rating": 4,
            "dates": "2022-03-11T15:20:30.000Z",
            "user_id": 73,
            "name": "dr. Jaiman Siregar"
        },
        {
            "id": 7736,
            "text": "beautiful building v good location helpful staff",
            "labels": 1,
            "rating": 4,
            "dates": "2022-01-05T20:52:41.000Z",
            "user_id": 1,
            "name": "Drs. Natalia Dabukke"
        },
        {
            "id": 7985,
            "text": "clean and modern great staff who are helpful",
            "labels": 1,
            "rating": 5,
            "dates": "2022-03-27T01:49:54.000Z",
            "user_id": 61,
            "name": "Kala Maryati"
        },
        {
            "id": 7992,
            "text": "excellent location staff wonderful breakfast great room a bit tired and brown with shower over the bath awkward to get in and out would return edpecially if refurbished",
            "labels": 1,
            "rating": 5,
            "dates": "2022-05-09T05:44:16.000Z",
            "user_id": 55,
            "name": "Lidya Sihombing"
        },
        {
            "id": 8067,
            "text": "breakfast room a little cramped the tv in our room was rather small",
            "labels": 0,
            "rating": 2,
            "dates": "2022-01-17T04:42:59.000Z",
            "user_id": 52,
            "name": "Tgk. Cinthia Sihombing, S.IP"
        },
        {
            "id": 8076,
            "text": "staff at front desk said they would send up ice and glasses minutes later no ice and glasses a call down and they said they were on it minutes later a call down to the front desk and we were then directed to room service they could have just called when we asked or just not have offered to take care of it in the first place or directed us to room service at first",
            "labels": 0,
            "rating": 2,
            "dates": "2022-03-11T20:28:30.000Z",
            "user_id": 29,
            "name": "Ina Firmansyah"
        },
        {
            "id": 8105,
            "text": "the hotel is new or renewed and very clean",
            "labels": 1,
            "rating": 4,
            "dates": "2022-03-12T10:49:26.000Z",
            "user_id": 83,
            "name": "Dr. Yuni Mangunsong"
        },
        {
            "id": 8133,
            "text": "missing swimming pool",
            "labels": 0,
            "rating": 2,
            "dates": "2022-04-04T07:09:45.000Z",
            "user_id": 36,
            "name": "Rachel Mansur"
        },
        {
            "id": 8219,
            "text": "bathroom a little dated",
            "labels": 0,
            "rating": 2,
            "dates": "2022-03-16T13:43:56.000Z",
            "user_id": 94,
            "name": "Dr. Karya Habibi"
        },
        {
            "id": 8293,
            "text": "everything s is too bad only location was good",
            "labels": 0,
            "rating": 3,
            "dates": "2022-05-07T20:19:17.000Z",
            "user_id": 46,
            "name": "Tgk. Cakrajiya Saputra, S.Ked"
        },
        {
            "id": 8332,
            "text": "the furniture bit worn off carpet could use a change",
            "labels": 0,
            "rating": 2,
            "dates": "2022-04-22T19:01:51.000Z",
            "user_id": 59,
            "name": "Dr. Zulfa Habibi, S.Gz"
        },
        {
            "id": 8373,
            "text": "i know nothing can be done about it but there is basically no lobby to spend sometimes at instead of sitting in the room i am adding this just for people s information",
            "labels": 0,
            "rating": 1,
            "dates": "2022-05-02T15:50:50.000Z",
            "user_id": 11,
            "name": "Nurul Halim, S.H."
        },
        {
            "id": 8379,
            "text": "helpfull staff location is ver good",
            "labels": 1,
            "rating": 4,
            "dates": "2022-04-19T12:47:22.000Z",
            "user_id": 7,
            "name": "Ina Siregar, S.Pt"
        },
        {
            "id": 8489,
            "text": "fantastic location for the stadium a bit pricey but good value overall especially when a big event is on",
            "labels": 1,
            "rating": 5,
            "dates": "2022-01-24T19:58:31.000Z",
            "user_id": 2,
            "name": "R.M. Ian Damanik, S.Kom"
        },
        {
            "id": 8532,
            "text": "took a long time to find my reservation and thought i would end up without a place to stay reservation was mysteriously in a friend s name although i made the reservation and paid for it with my credit card in my name",
            "labels": 0,
            "rating": 1,
            "dates": "2022-01-04T05:59:02.000Z",
            "user_id": 38,
            "name": "Cagak Napitupulu"
        },
        {
            "id": 8716,
            "text": "excellent hotel one of the best i ve stayed keeping the newspaper theme adds character facilities in the room excellent including layout and old style telephone and free to use nespresso machine",
            "labels": 1,
            "rating": 4,
            "dates": "2022-03-22T11:40:03.000Z",
            "user_id": 14,
            "name": "Cornelia Susanti"
        },
        {
            "id": 8759,
            "text": "the property was lovely it has so much history towards it and it was clean spacious welcoming and well structured regarding the hotel facilties and staff the americano bar was so lovely to finish the night off and they were so lovely regarding our birthday celebration with card and treat in the room",
            "labels": 1,
            "rating": 5,
            "dates": "2022-02-13T22:59:50.000Z",
            "user_id": 96,
            "name": "Clara Purnawati"
        },
        {
            "id": 9019,
            "text": "nice communal areas staff pleasant",
            "labels": 1,
            "rating": 4,
            "dates": "2022-03-22T01:38:09.000Z",
            "user_id": 89,
            "name": "Banawi Mandasari"
        },
        {
            "id": 9040,
            "text": "breakfast was poor and disorganized it didn t really match the quality of the hotel and its services",
            "labels": 0,
            "rating": 3,
            "dates": "2022-05-13T11:09:36.000Z",
            "user_id": 86,
            "name": "Respati Suwarno"
        },
        {
            "id": 9078,
            "text": "little bit cold in the room",
            "labels": 0,
            "rating": 1,
            "dates": "2022-05-15T20:47:35.000Z",
            "user_id": 17,
            "name": "Prasetya Maulana, S.Psi"
        },
        {
            "id": 9253,
            "text": "the rooms were spotless beds so comfy bed linen good quality staff very helpful friendly breakfast very good location fifteen mins walk from centre rates very reasonable",
            "labels": 1,
            "rating": 5,
            "dates": "2022-01-30T05:01:58.000Z",
            "user_id": 70,
            "name": "Carub Januar"
        },
        {
            "id": 9263,
            "text": "not enough tea n milk in room",
            "labels": 0,
            "rating": 3,
            "dates": "2022-05-04T20:16:58.000Z",
            "user_id": 42,
            "name": "Dr. Ciaobella Wastuti, M.Kom."
        },
        {
            "id": 9474,
            "text": "position of hotel room and amenities parking in hotel",
            "labels": 1,
            "rating": 4,
            "dates": "2022-03-22T08:54:52.000Z",
            "user_id": 71,
            "name": "Dinda Sirait"
        },
        {
            "id": 9499,
            "text": "only negative was that room was a little cramped but still comfortable",
            "labels": 0,
            "rating": 2,
            "dates": "2022-03-07T01:22:02.000Z",
            "user_id": 57,
            "name": "Dr. Argono Rajata"
        },
        {
            "id": 9515,
            "text": "friendly staff great place to stay in southwark unconventional in a good way room layout quiet",
            "labels": 1,
            "rating": 4,
            "dates": "2022-03-04T17:03:07.000Z",
            "user_id": 93,
            "name": "Devi Rahimah"
        },
        {
            "id": 9581,
            "text": "everyday cleaning of the room could be a lil better just day the wet floor towel in the washroom was not replaced",
            "labels": 0,
            "rating": 1,
            "dates": "2022-05-09T08:08:31.000Z",
            "user_id": 47,
            "name": "Waluyo Nasyidah"
        },
        {
            "id": 9741,
            "text": "pillows too hard and only wine or beer for sale i would have preferred a gin or vodka",
            "labels": 0,
            "rating": 3,
            "dates": "2022-03-02T18:51:16.000Z",
            "user_id": 79,
            "name": "drg. Pranawa Anggriawan, M.Ak"
        },
        {
            "id": 9776,
            "text": "not enough tea and milk in the room and maybe some biscuits would have been nice didn t have breakfast we thought it was too expensive",
            "labels": 0,
            "rating": 1,
            "dates": "2022-04-29T16:15:51.000Z",
            "user_id": 84,
            "name": "Dr. Dewi Prasasta"
        },
        {
            "id": 9879,
            "text": "the door makes stupid sound",
            "labels": 0,
            "rating": 2,
            "dates": "2022-06-04T09:31:59.000Z",
            "user_id": 131,
            "name": null
        }
    ]
}
```

- Find Reviews By Hotel Id and User Id
>https://review-ywu6raktuq-uc.a.run.app/reviews

- Required
>/{hotelId} as [interger]/{userId} as [interger]

- Example Request
>curl --location -g --request GET 'https://review-ywu6raktuq-uc.a.run.app/reviews/{{hotelId}}/{{userId}}'

This endpoint is to list all reviews regarding to specific hotelId and userId
```javascript
{
    "message": "successful",
    "data": [
        {
            "id": 9879,
            "text": "the door makes stupid sound",
            "labels": 0,
            "rating": 2,
            "dates": "2022-06-04T09:31:59.000Z"
        }
    ]
}
```
- Find Specific Review By Hotel Id, User Id, and Review Id
>https://review-ywu6raktuq-uc.a.run.app/reviews

- Required
>/{hotelId} as [interger]/{userId} as [interger]/{reviewId} as [interger]

- Example Request
>curl --location -g --request GET 'https://review-ywu6raktuq-uc.a.run.app/reviews/{{hotelId}}/{{userId}}/{{reviewId}}'

This endpoint is to list all reviews regarding to specific hotelId , userId, and reviewId itself
```javascript
{
    "message": "successful",
    "data": {
        "id": 9879,
        "text": "the door makes stupid sound",
        "labels": 0,
        "rating": 2,
        "dates": "2022-06-04T09:31:59.000Z",
        "name": null
    }
}
```
- Update By Review Id
>https://review-ywu6raktuq-uc.a.run.app/reviews

- Required
>/{hotelId} as [interger]/{userId} as [interger]/{reviewId} as [interger]

- Example Request
>curl --location -g --request PUT 'https://review-ywu6raktuq-uc.a.run.app/reviews/{{hotelId}}/{{userId}}/{{reviewId}}' \
--header 'Authorization: Bearer {{accessToken}}' \
--data-raw '{
    "text": "the bed so comfy",
    "rating": 4
}'

This endpoint is to allow users edit their reviews regarding to specific hotelId , userId, and reviewId itself
```javascript
{
    "message": "review was updated successfully."
}
```
- Delete By Review Id
>https://review-ywu6raktuq-uc.a.run.app/reviews

- Required
>/{hotelId} as [interger]/{userId} as [interger]/{reviewId} as [interger]

- Example Request
>curl --location -g --request DELETE 'https://review-ywu6raktuq-uc.a.run.app/reviews/{{hotelId}}/{{userId}}/{{reviewId}}' \
--header 'Authorization: Bearer {{accessToken}}'

This endpoint is to allow users delete their reviews regarding to specific hotelId , userId, and reviewId itself
```javascript
{
    "message": "review was deleted successfully!"
}
```