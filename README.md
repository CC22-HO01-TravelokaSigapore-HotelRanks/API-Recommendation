# Cloud Computing Path
Creating RESTful APIs and deploying to Google Cloud Platform Using [Google Cloud Run](https//cloud.google.com/run) for communication between Machine Learning Recommendation System Model and Mobile Development. Creating database in [Google Cloud SQL](https//cloud.google.com/sql)


# RESTful API 
In making the RESTful APIs we use [Sequelize](https//sequelize.org), [ExpressJS](https//expressjs.com), [CORS](https//enable-cors.org/index.html), [NodeJS](https//nodejs.org/en/) 

# List APIs
In this section there is a list of all Hotel APIs that can be Sorted
 1. API-Hotel
 2. Login-Register API
 3. Review API 

# API-Hotel
In this section there is a Hotel API that can be used to be main foundation of our hotel apps. Response from each URL using JSON format.

- Base URL
>https//hotel-test-ywu6raktuq-uc.a.run.app

- Path
>hotel/list

- Method
><Code><font color="green">GET</font></Code> 

- List All Hotel
>https//hotel-test-ywu6raktuq-uc.a.run.app/hotel/list

- Example request
>curl --location --request GET 'https//hotel-test-ywu6raktuq-uc.a.run.app/hotel/list'

This API is mainly to get the list of the hotel for the users
```javascript
{
    {
    "message" "Success",
    "data" [
        {
            "type_nearby_destination" [
                "family park",
                " botanical"
            ],
            "image_links" [
                "https//media-cdn.tripadvisor.com/media/vr-splice-j/06/62/d3/ff.jpg",
                " https//media-cdn.tripadvisor.com/media/vr-splice-j/03/5c/32/76.jpg",
                " https//media-cdn.tripadvisor.com/media/vr-splice-j/03/5c/32/d3.jpg",
                " https//media-cdn.tripadvisor.com/media/vr-splice-j/03/5c/33/2d.jpg",
                " https//q-xx.bstatic.com/xdata/images/hotel/max1024x768/59560252.jpg?k=4f58bd80c52da6a0db7482fac8c83572a180b36173856c6850b551325a77ae88&o="
            ],
            "id" 1,
            "name" "Bunga Neil Villa -  3 Bedrooms - Seminyak",
            "latitude" "-8.685924978406074",
            "longitude" "115.16562524113574",
            "neighborhood" "Seminyak",
            "hotel_star" "5.0",
            "price_per_night" 191,
            "free_refund" false,
            "nearby_destination" 2,
            "breakfast" true,
            "pool" false,
            "wifi" false,
            "parking" true,
            "smoking" true,
            "air_conditioner" true,
            "wheelchair_access" true,
            "average_bed_size" false,
            "staff_vaccinated" true,
            "child_area" false,
            "price_category" 2
            }
        ]
    }
}
```
- List Hotel By Search
>https//hotel-test-ywu6raktuq-uc.a.run.app/search?keyword=name
- Path
>/search?keyword=name

- Required
>Keyword=[varchar]
    
- Example Request
>curl --location --request GET 'https//hotel-test-ywu6raktuq-uc.a.run.app/search?keyword=bali'

This endpoint is mainly for searching purposes. The "keyword" parameter is a must when searching. There is a lot of data so we have to take 1 data as a sample
```javascript
{
    "message" "Success",
    "data" [
        {
            "type_nearby_destination" [
                "mall",
                " zoo",
                " botanical",
                " historical"
            ],
            "image_links" [
                "https//cf.bstatic.com/xdata/images/hotel/max1280x900/281375126.jpg?k=4cece1385abeaba117b036edcfb3e6400116c999a4f3959dfcf5b3fe1777e341&o=&hp=1",
                " https//dynamic-media-cdn.tripadvisor.com/media/photo-o/15/9f/d1/d4/amazing-and-wonderful.jpg?w=900&h=-1&s=1",
                " https//www.ministryofvillas.com/wp-content/uploads/2012/11/bali-latalianavilla-02-800x530.jpg",
                " https//i.pinimg.com/736x/2e/e2/32/2ee23278508f8ebc1b1fd1d1acadc676.jpg",
                " https//pix10.agoda.net/hotelImages/276948/-1/fc0be78fcc6b7eedf9aeb59ab1f660b4.jpg?ca=10&ce=1&s=1024x768"
            ],
            "id" 11,
            "name" "❤PROMO❤ Little Balinese Open Villa!!",
            "latitude" "-8.713859330790827",
            "longitude" "115.17517877474460",
            "neighborhood" "Kuta Village",
            "hotel_star" "5.0",
            "price_per_night" 37,
            "free_refund" false,
            "nearby_destination" 4,
            "breakfast" true,
            "pool" false,
            "wifi" true,
            "parking" true,
            "smoking" false,
            "air_conditioner" true,
            "wheelchair_access" true,
            "average_bed_size" false,
            "staff_vaccinated" true,
            "child_area" false,
            "price_category" 1
            }
        ]
    }
```
- List Hotel By Rating
>https//hotel-test-ywu6raktuq-uc.a.run.app/hotel/number

- Path
>hotel/number

- Required
>rating = [interger]
    
- Example request
>curl --location --request GET 'https//hotel-test-ywu6raktuq-uc.a.run.app/hotel/5'

This endpoint is mainly to get the rating recommendation of users. There is a lot of data so we have to take 1 data as a sample
```javascript
{
    "message" "Success",
    "data" [
        {
            "type_nearby_destination" [
                "family park",
                " botanical"
            ],
            "image_links" [
                "https//media-cdn.tripadvisor.com/media/vr-splice-j/06/62/d3/ff.jpg",
                " https//media-cdn.tripadvisor.com/media/vr-splice-j/03/5c/32/76.jpg",
                " https//media-cdn.tripadvisor.com/media/vr-splice-j/03/5c/32/d3.jpg",
                " https//media-cdn.tripadvisor.com/media/vr-splice-j/03/5c/33/2d.jpg",
                " https//q-xx.bstatic.com/xdata/images/hotel/max1024x768/59560252.jpg?k=4f58bd80c52da6a0db7482fac8c83572a180b36173856c6850b551325a77ae88&o="
            ],
            "id" 1,
            "name" "Bunga Neil Villa -  3 Bedrooms - Seminyak",
            "latitude" "-8.685924978406074",
            "longitude" "115.16562524113574",
            "neighborhood" "Seminyak",
            "hotel_star" "5.0",
            "price_per_night" 191,
            "free_refund" false,
            "nearby_destination" 2,
            "breakfast" true,
            "pool" false,
            "wifi" false,
            "parking" true,
            "smoking" true,
            "air_conditioner" true,
            "wheelchair_access" true,
            "average_bed_size" false,
            "staff_vaccinated" true,
            "child_area" false,
            "price_category" 2
            }
        ]
    }
```

- List Hotel By Trending
>https//hotel-test-ywu6raktuq-uc.a.run.app/hotel/number

- Required
>hotel/interger

- Example Request
>curl --location --request GET 'https//hotel-test-ywu6raktuq-uc.a.run.app/hotel/5'

This endpoint is mainly to get the rating recommendation of users. There is a lot of data so we have to take 1 data as a sample
```javascript
{
    "message" "Success",
    "data" [
        {
            "type_nearby_destination" [
                "family park",
                " botanical"
            ],
            "image_links" [
                "https//media-cdn.tripadvisor.com/media/vr-splice-j/06/62/d3/ff.jpg",
                " https//media-cdn.tripadvisor.com/media/vr-splice-j/03/5c/32/76.jpg",
                " https//media-cdn.tripadvisor.com/media/vr-splice-j/03/5c/32/d3.jpg",
                " https//media-cdn.tripadvisor.com/media/vr-splice-j/03/5c/33/2d.jpg",
                " https//q-xx.bstatic.com/xdata/images/hotel/max1024x768/59560252.jpg?k=4f58bd80c52da6a0db7482fac8c83572a180b36173856c6850b551325a77ae88&o="
            ],
            "id" 1,
            "name" "Bunga Neil Villa -  3 Bedrooms - Seminyak",
            "latitude" "-8.685924978406074",
            "longitude" "115.16562524113574",
            "neighborhood" "Seminyak",
            "hotel_star" "5.0",
            "price_per_night" 191,
            "free_refund" false,
            "nearby_destination" 2,
            "breakfast" true,
            "pool" false,
            "wifi" false,
            "parking" true,
            "smoking" true,
            "air_conditioner" true,
            "wheelchair_access" true,
            "average_bed_size" false,
            "staff_vaccinated" true,
            "child_area" false,
            "price_category" 2
            }
        ]
    }
```
- list hotel by Trending
>https//hotel-test-ywu6raktuq-uc.a.run.app/trending/?page=number&offset=number
- Path
>trending/?page=number&offset=number

- Required
>page=[interger]& offset=[interger]

- Example request
>https//hotel-test-ywu6raktuq-uc.a.run.app/trending/?page=10&offset=0

This endpoint is used to get the hotels that are trending or popular. There is a lot of data so we have to take 1 data as a sample
```javascript
{
    "message" "Success",
    "data" [
        {
            "type_nearby_destination" [
                "family park",
                " botanical"
            ],
            "image_links" [
                "https//media-cdn.tripadvisor.com/media/vr-splice-j/06/62/d3/ff.jpg",
                " https//media-cdn.tripadvisor.com/media/vr-splice-j/03/5c/32/76.jpg",
                " https//media-cdn.tripadvisor.com/media/vr-splice-j/03/5c/32/d3.jpg",
                " https//media-cdn.tripadvisor.com/media/vr-splice-j/03/5c/33/2d.jpg",
                " https//q-xx.bstatic.com/xdata/images/hotel/max1024x768/59560252.jpg?k=4f58bd80c52da6a0db7482fac8c83572a180b36173856c6850b551325a77ae88&o="
            ],
            "id" 1,
            "name" "Bunga Neil Villa -  3 Bedrooms - Seminyak",
            "latitude" "-8.685924978406074",
            "longitude" "115.16562524113574",
            "neighborhood" "Seminyak",
            "hotel_star" "5.0",
            "price_per_night" 191,
            "free_refund" false,
            "nearby_destination" 2,
            "breakfast" true,
            "pool" false,
            "wifi" false,
            "parking" true,
            "smoking" true,
            "air_conditioner" true,
            "wheelchair_access" true,
            "average_bed_size" false,
            "staff_vaccinated" true,
            "child_area" false,
            "price_category" 2
            }
        ]
    }
```
- Get The Details of one hotel
- Base URL
>https//hotel-test-ywu6raktuq-uc.a.run.app

- Method
><Code><font color="yellow">POST</font></Code>

- One Hotel Detail
>https//hotel-test-ywu6raktuq-uc.a.run.app/hotel/details/number

- Required
>/[interger]

- Example Request
>curl --location --request POST 'https//hotel-test-ywu6raktuq-uc.a.run.app/hotel/details/50'

This endpoint is used to get the details of one hotel.
```javascript
{
    "message" "Success",
    "data" {
        "type_nearby_destination" [
            "sport",
            " zoo",
            " botanical"
        ],
        "image_links" [
            "https//temukuubud.com/wp-content/uploads/2020/05/temuku-ubud-sunrise-rice-fields-villa-evening.jpg",
            " https//cf.bstatic.com/xdata/images/hotel/max1280x900/176301474.jpg?k=e7d55bfa2d3ef99037292b9874740080d50f4127ca89f79df197e4a3717e5d07&o=&hp=1",
            " https//cf.bstatic.com/xdata/images/hotel/max1024x768/49262016.jpg?k=9da025acb27df1524384798982e549b7d31f8489fe298cc36d98632c21f62fcf&o=&hp=1",
            " https//pix10.agoda.net/hotelImages/248/248454/248454_15060711240028766227.jpg?ca=4&ce=1&s=1024x768",
            " https//cf.bstatic.com/xdata/images/hotel/max1024x768/247300040.jpg?k=350a40007da88a4e607af7d543abe43d8161b3b261b7ac15fb9c394a3b77367f&o=&hp=1"
        ],
        "id" 50,
        "name" "Greenfields view 2story home with pool & motorbike",
        "latitude" "-8.496144180816607",
        "longitude" "115.28302553432192",
        "neighborhood" "Ubud",
        "hotel_star" "5.0",
        "price_per_night" 122,
        "free_refund" false,
        "nearby_destination" 4,
        "breakfast" true,
        "pool" true,
        "wifi" true,
        "parking" true,
        "smoking" true,
        "air_conditioner" true,
        "wheelchair_access" false,
        "average_bed_size" false,
        "staff_vaccinated" true,
        "child_area" false,
        "price_category" 2
        }
    }
```
- User Recommendation
>https//hotel-test-ywu6raktuq-uc.a.run.app/user-recommendation/number

- Required
>/[interger]

- Example Request
>curl --location --request POST 'https//hotel-test-ywu6raktuq-uc.a.run.app/user-recommendation/110'

This Endpoint is used to get user preferences recommendation. Thre is a Lot of data so we have to take 1 data as a sample.
```javascript
{
    "message" "Success",
    "data" [
        {
            "type_nearby_destination" [
                "culinary",
                " mall",
                " botanical",
                " historical"
            ],
            "image_links" [
                "https//s3.ap-southeast-2.amazonaws.com/thebalibible.com/uploads/images/venue/594039e685ffcf9bdab11baaff970a14.jpg?v=1",
                " https//pix10.agoda.net/hotelImages/474386/-1/c08b97d6183862230531a97a39f9d8b0.jpg?ca=9&ce=1&s=1024x768",
                " https//www.ubud-villas.com/wp-content/uploads/2021/10/Villa-Hijau_Feature.jpg",
                " https//cf.bstatic.com/xdata/images/hotel/max1280x900/161708562.jpg?k=5454bd2da0494840970988b976c80e89033e795e58b8d85324db3dffa5441055&o=&hp=1",
                " https//q-xx.bstatic.com/xdata/images/hotel/max1280x900/102636121.jpg?k=9d9bb609f20a1ef1e5fe01541db64dc064e24c1800a60dc55917cb9d191d29ab&o="
            ],
            "id" 5,
            "name" "Villa Hijau - Peace and tranquility.",
            "latitude" "-8.500065498130304",
            "longitude" "115.25048098974094",
            "neighborhood" "Ubud",
            "hotel_star" "5.0",
            "price_per_night" 81,
            "free_refund" false,
            "nearby_destination" 5,
            "breakfast" true,
            "pool" false,
            "wifi" true,
            "parking" true,
            "smoking" false,
            "air_conditioner" true,
            "wheelchair_access" false,
            "average_bed_size" false,
            "staff_vaccinated" true,
            "child_area" true,
            "price_category" 2
            }
        ]
    }
```
- Hotel Recommendation
>https//hotel-test-ywu6raktuq-uc.a.run.app/hotel-recommendation/number

- Required
>/[interger]

- Example Request
>curl --location --request POST 'https//hotel-test-ywu6raktuq-uc.a.run.app/hotel-recommendation/50'

This endpoint is used to get the hotel recommendation based on hotel. There is a lot of data so we have to take 1 data as a sample
```javascript
{
    "message" "Success",
    "data" [
        {
            "type_nearby_destination" [
                "sport",
                " zoo",
                " mall"
            ],
            "image_links" [
                "https//images.squarespace-cdn.com/content/v1/5feb7772dcac5279f756c909/db08b3a3-dbcf-407c-9040-f9aadbf42eb6/23.jpg",
                " https//www.theluxurybali.com/wp-content/uploads/2016/07/1-or-2-Bedroom-Pool-Villa1-660x440.jpg",
                " https//q-xx.bstatic.com/xdata/images/hotel/840x460/272688877.jpg?k=7b847fc976d2f594455dd2ccd737d28e8f0dcb205fd2a431cb72e10a45255737&o=",
                " https//www.theluxurybali.com/wp-content/uploads/2015/04/The-Istana-Pool-1.jpg",
                " https//q-xx.bstatic.com/xdata/images/hotel/840x460/272689279.jpg?k=0e7e761b575249d1614e3021c3584c60383900613de5c6bf44ffa0a5a6624650&o="
            ],
            "id" 16,
            "name" "Private Luxury, 2 bedroom Villa, in Canggu",
            "latitude" "-8.668900757522296",
            "longitude" "115.14791089797410",
            "neighborhood" "Canggu",
            "hotel_star" "5.0",
            "price_per_night" 206,
            "free_refund" false,
            "nearby_destination" 4,
            "breakfast" true,
            "pool" true,
            "wifi" true,
            "parking" true,
            "smoking" true,
            "air_conditioner" true,
            "wheelchair_access" false,
            "average_bed_size" false,
            "staff_vaccinated" true,
            "child_area" false,
            "price_category" 2
            }
        ]
    }
```
- By Location Recommendation
>https//hotel-test-ywu6raktuq-uc.a.run.app

- Required
>/byLocation

- Example Request
>curl --location --request POST 'https//hotel-test-ywu6raktuq-uc.a.run.app/byLocation/' \
--data-raw '{
    "user_id"10,
    "longitude"12.7,
    "latitude"35.6
}'

This endpoint is strictly for giving recommendation for users by their location. 
```javascript
{
    "message" "Success",
    "data" [
        {
            "type_nearby_destination" [
                "botanical"
            ],
            "image_links" [
                "https//cf.bstatic.com/xdata/images/hotel/max1280x900/36057502.jpg?k=17285ebdaf64fa436a748d639b40274cb20e8150ffdd335eaf28a0baf4598b83&o=&hp=1",
                " https//cf.bstatic.com/xdata/images/hotel/max1024x768/100354372.jpg?k=6fa862e8e1f0134b83e189aa63507de0317246b14e8a2d6bfb2b8dd0df5aef84&o=&hp=1",
                " https//yomavillasbali.com/wp-content/uploads/2016/09/Yoma-Villas-Bali-Luxury-Accommodation-Villa-Batur-Gallery-13.jpg",
                " https//cf.bstatic.com/xdata/images/hotel/max1280x900/33256054.jpg?k=9db8a051b075ab4b7b36937d098d9e59a3353bef16ece8446f584505adccce6a&o=&hp=1",
                " https//cf.bstatic.com/xdata/images/hotel/max500/240326281.jpg?k=67ea352e72c793ca1fc4fd44352f48ca2a0c491dcecb950ce8d796be69e640c8&o=&hp=1"
            ],
            "id" 15,
            "name" "Yoma Villas Bali - Villa Batur 3 bedroom",
            "latitude" "-8.641679783016158",
            "longitude" "115.13408163470034",
            "neighborhood" "Canggu",
            "hotel_star" "5.0",
            "price_per_night" 185,
            "free_refund" false,
            "nearby_destination" 1,
            "breakfast" false,
            "pool" false,
            "wifi" false,
            "parking" true,
            "smoking" true,
            "air_conditioner" true,
            "wheelchair_access" false,
            "average_bed_size" false,
            "staff_vaccinated" true,
            "child_area" false,
            "price_category" 2
        },
    ]
}
```
- For You
>https://hotel-test-ywu6raktuq-uc.a.run.app

- Path
>/for-you

- Example Request
>curl --location --request POST 'https://hotel-test-ywu6raktuq-uc.a.run.app/for-you/' \
--data-raw '{
    "user_id":4,
    "longitude":12.7,
    "latitude":35.6
}'

This endpoint is mainly used to give users the perfect recommendation for them. There is a lot of data so we have to take 1 data as a sample
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
        }
    ]
}
```


# Login-Register API
In this Section, There is a Login-Register API That can be used as Login and Register System For Our Hotel apps. Response from each URL using JSON format.

- Base URL
>https//test1-ywu6raktuq-uc.a.run.app

- Path
>/user

- Method
><Code><font color="Yellow">POST</font></Code> 

- User Registration
>https//test1-ywu6raktuq-uc.a.run.app/user/register

- Example request
>curl --location --request POST 'https//test1-ywu6raktuq-uc.a.run.app/user/register' \
--data-urlencode 'email=' \
--data-urlencode 'userName=' \
--data-urlencode 'password='

This endpoint is used to Registering User
```javascript
{
    "message" "successful"
}
```
- User Login
>https//test1-ywu6raktuq-uc.a.run.app/user/login

- Example Request
>curl --location --request POST 'https//test1-ywu6raktuq-uc.a.run.app/user/login' \
--data-urlencode 'userName=' \
--data-urlencode 'password='

This endpoint is used to User Login Without Google
```javascript
{
    "message" "successful",
    "data" {
        "userId" 131,
        "accessToken" "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZyZWRkeWFuZHJlYXM0QGdtYWlsLmNvbSIsImlkIjoxMzEsInVzZXJOYW1lIjoiZnJlZGR5YW5kcmVhc2NoYW5kcmEiLCJpYXQiOjE2NTQzMzE2MDgsImV4cCI6MTY1NDMzMjUwOH0.wAcEjAF7SEOs4Rp9XpHhXYXn4FcS7qW9r2fIdVGY030"
    }
}
```
- LOG IN with GOOGLE
>https//test1-ywu6raktuq-uc.a.run.app/user/login/google?code={{codeToken}}

- Method
><Code><font color="Green">GET</font></Code> 

- Example request
>curl --location -g --request GET 'https//test1-ywu6raktuq-uc.a.run.app/user/login/google?code={{codeToken}}'

This Endpoint is used to User Login With Google
```javascript
{
    "message" "successful",
    "data" {
        "userId" 131,
        "accessToken" "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZyZWRkeWFuZHJlYXM0QGdtYWlsLmNvbSIsImlkIjoxMzEsInVzZXJOYW1lIjoiZnJlZGR5YW5kcmVhc2NoYW5kcmEiLCJpYXQiOjE2NTQzMzQyNTYsImV4cCI6MTY1NDMzNTE1Nn0.BCM-f1dUbo_8seLtFchrWq1C7XvKAX1teCj5FZmbuJo"
    }
}
```
- GET USER BY ID
>https//test1-ywu6raktuq-uc.a.run.app/user/

- Example request
>curl --location --request GET 'https//test1-ywu6raktuq-uc.a.run.app/user/' \
--header 'Authorization Bearer •••••••'

This Endpoint is used to Get the User By id 
```javascript
{
    "message" "sucessfull",
    "data" {
        "hobby" [
            ""
        ],
        "search_history" [
            ""
        ],
        "stay_history" [
            ""
        ],
        "special_needs" [
            ""
        ],
        "id" 131,
        "name" null,
        "birth_date" null,
        "nid" null,
        "family" false,
        "email" "freddyandreas4@gmail.com",
        "userName" "freddyandreaschandra",
        "reviewCounter" 0,
        "createdAt" "2022-06-04T073805.000Z",
        "updatedAt" "2022-06-04T073805.000Z"
    }
}
```
- REFRESH LOGIN
>https//test1-ywu6raktuq-uc.a.run.app/user/login

- Required
>/refresh-login

- Example Request
>curl --location --request GET 'https//test1-ywu6raktuq-uc.a.run.app/user/login/refresh-login'

Request to get a new 'access token' for getting session/to login. This request will be use 'cache' that set to the client before in Login to do this request
```javascript
{
    "message" "successful",
    "data" {
        "userId" 131,
        "accessToken" "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZyZWRkeWFuZHJlYXM0QGdtYWlsLmNvbSIsImlkIjoxMzEsInVzZXJOYW1lIjoiZnJlZGR5YW5kcmVhc2NoYW5kcmEiLCJpYXQiOjE2NTQzMzIyNDUsImV4cCI6MTY1NDMzMzE0NX0.GKM2wqPEkx6lrL-ltT5DLnjIrZcw_fmD7imoMiARzzM"
    }
}
```

- UPDATE USER BY ID
>https//test1-ywu6raktuq-uc.a.run.app/user/

- Method
><Code><font color="#4B7BE5">PUT</font></Code> 

- Example Request
>curl --location --request PUT 'https//test1-ywu6raktuq-uc.a.run.app/user/' \
--header 'Authorization Bearer •••••••'

This Endpoint is used to update user needs by looking for userId
```javascript
{
    "message" "sucessfull"
}
```
- LOGOUT
>https//test1-ywu6raktuq-uc.a.run.app/user

- Required
>/logout

- Method
><Code><font color="F32424">DELETE</font></Code>

- Example Request
>curl --location --request DELETE 'https//test1-ywu6raktuq-uc.a.run.app/user/logout'

Logout session by delete the 'refresh token' in cache
```javascript
{
    "message" "successful"
}
```

# Review API
In this Section, There is a Review API that can be used to create, manage, update, and delete through our hotel apps. Response from each URL using JSON format.

- Base URL
>https//review-ywu6raktuq-uc.a.run.app

- Path
>/reviews

- Required
>/{hotelId} as [interger]/ {userId} as [interger]

- Method
><Code><font color="Yellow">POST</font></Code>

- Example Request
>curl --location -g --request POST 'https//review-ywu6raktuq-uc.a.run.app/reviews/{{hotelId}}/{{userId}}' \
--header 'Authorization Bearer {{accessToken}}' \
--data-raw '{
    "text""the door makes stupid sound",
    "rating" 2
}'

This endpoint to creates new reviews based on specific hotelId and userId
```javascript
{
    "message" "post review success"
}
```
- Find All Reviews
>https//review-ywu6raktuq-uc.a.run.app/reviews

- Method
><Code><font color="Green">GET</font></Code> 

- Example Request
>curl --location --request GET 'https//review-ywu6raktuq-uc.a.run.app/reviews'

This endpoint is used to list all the reviews. This endpoint will display a lot of data. We only take 1 data as a sample
```javascript
[
    {
        "id" 9879,
        "text" "the door makes stupid sound",
        "labels" 0,
        "rating" 2,
        "dates" "2022-06-04T093159.000Z",
        "hotel_id" 21,
        "user_id" 131
    }
]
```
- Find Reviews By Hotel Id
>https//review-ywu6raktuq-uc.a.run.app/reviews

- Required
>/{hotelId} as [interger]?page&offset

- Example Request
>curl --location -g --request GET 'https//review-ywu6raktuq-uc.a.run.app/reviews/{{hotelId}}?page&offset'

This endpoint is used to list all reviews regarding to specific hotelId. In the real test on postman there is 101 data so we take 1 data for sample
```javascript
{
    "message" "successful",
    "total" 1,
    "data" [
        {
            "id" 9879,
            "text" "the door makes stupid sound",
            "labels" 0,
            "rating" 2,
            "dates" "2022-06-04T093159.000Z",
            "user_id" 131,
            "name" null
        }
    ]
}
```

- Find Reviews By Hotel Id and User Id
>https//review-ywu6raktuq-uc.a.run.app/reviews

- Required
>/{hotelId} as [interger]/{userId} as [interger]

- Example Request
>curl --location -g --request GET 'https//review-ywu6raktuq-uc.a.run.app/reviews/{{hotelId}}/{{userId}}'

This endpoint is used to list all reviews regarding to specific hotelId and userId
```javascript
{
    "message" "successful",
    "data" [
        {
            "id" 9879,
            "text" "the door makes stupid sound",
            "labels" 0,
            "rating" 2,
            "dates" "2022-06-04T093159.000Z"
        }
    ]
}
```
- Find Specific Review By Hotel Id, User Id, and Review Id
>https//review-ywu6raktuq-uc.a.run.app/reviews

- Required
>/{hotelId} as [interger]/{userId} as [interger]/{reviewId} as [interger]

- Example Request
>curl --location -g --request GET 'https//review-ywu6raktuq-uc.a.run.app/reviews/{{hotelId}}/{{userId}}/{{reviewId}}'

This endpoint is used to list all reviews regarding to specific hotelId , userId, and reviewId itself
```javascript
{
    "message" "successful",
    "data" {
        "id" 9879,
        "text" "the door makes stupid sound",
        "labels" 0,
        "rating" 2,
        "dates" "2022-06-04T093159.000Z",
        "name" null
    }
}
```
- Update By Review Id
>https//review-ywu6raktuq-uc.a.run.app/reviews

- Required
>/{hotelId} as [interger]/{userId} as [interger]/{reviewId} as [interger]

- Example Request
>curl --location -g --request PUT 'https//review-ywu6raktuq-uc.a.run.app/reviews/{{hotelId}}/{{userId}}/{{reviewId}}' \
--header 'Authorization Bearer {{accessToken}}' \
--data-raw '{
    "text" "the bed so comfy",
    "rating" 4
}'

This endpoint is used to allow users edit their reviews regarding to specific hotelId , userId, and reviewId itself
```javascript
{
    "message" "review was updated successfully."
}
```
- Delete By Review Id
>https//review-ywu6raktuq-uc.a.run.app/reviews

- Required
>/{hotelId} as [interger]/{userId} as [interger]/{reviewId} as [interger]

- Example Request
>curl --location -g --request DELETE 'https//review-ywu6raktuq-uc.a.run.app/reviews/{{hotelId}}/{{userId}}/{{reviewId}}' \
--header 'Authorization Bearer {{accessToken}}'

This endpoint is used to allow users delete their reviews regarding to specific hotelId , userId, and reviewId itself
```javascript
{
    "message" "review was deleted successfully!"
}
```