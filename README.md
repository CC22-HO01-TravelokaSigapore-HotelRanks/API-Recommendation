# Cloud Computing Path
Creating RESTful APIs and deploying to Google Cloud Platform Using [Google Cloud Run](https//cloud.google.com/run) for communication between Machine Learning Recommendation System Model and Mobile Development. Creating database in [Google Cloud SQL](https//cloud.google.com/sql)

---

## RESTful API 
in making the RESTful APIs we use [Sequelize](https//sequelize.org), [ExpressJS](https//expressjs.com), [CORS](https//enable-cors.org/index.html), [NodeJS](https//nodejs.org/en/)

---
## The List Of APIs
In this section there is a list of all Hotel APIs that can be Sorted

1. [API-Hotel](#api-hotel)
2. [Login-Register API](#login-register-api)
3. [Review-API](#review-api)
---

### API-Hotel
In this section there is a Hotel API that can be used to be main foundation of our hotel apps. Response from each URL using JSON format.


- <span style="color:crimson;font-weight:400;font-size:20px">**Base URL**</span> 
>https//hotel-test-ywu6raktuq-uc.a.run.app

1. #### [List All Hotel](#1--list-hotel-by-search1--list-hotel-by-searchspanspan)
>https//hotel-test-ywu6raktuq-uc.a.run.app/hotel/list

2. <span style="color:magenta;font-weight:700;font-size:17px">Path</span>
>hotel/list

3. <span style="color:#F806CC;font-weight:700;font-size:17px">Method</span>
><Code><font color="green">GET</font></Code> 

4. <span style="color:gold;font-weight:700;font-size:17px">Example request</span>
>curl --location --request GET 'https//hotel-test-ywu6raktuq-uc.a.run.app/hotel/list'

<details><summary markdown="span">Result For Request list all hotel</summary>This API is mainly to get the list of the hotel for the users. There is a lot of data so we have to take 1 data as a sample

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
</details>

---


1. #### [List Hotel By Search](#1--list-hotel-by-searchspan)</span>
>https//hotel-test-ywu6raktuq-uc.a.run.app/search?keyword=name

2. <span style="color:magenta;font-weight:700;font-size:17px">Path</span>
>/search?keyword=name

3. <span style="color:cyan;font-weight:700;font-size:17px">Required</span>
>Keyword=[varchar]
    
4. <span style="color:gold;font-weight:700;font-size:17px">Example Request</span>
>curl --location --request GET 'https//hotel-test-ywu6raktuq-uc.a.run.app/search?keyword=bali'

<details><summary markdown="span">Result For Request based on keyword</summary>This endpoint is mainly for searching purposes. The "keyword" parameter is a must when searching. There is a lot of data so we have to take 1 data as a sample

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
</details>

---

1. #### [List Hotel By Rating](#1--list-hotel-by-rating)
>https//hotel-test-ywu6raktuq-uc.a.run.app/hotel/number

2. <font color="caulifower">Path</font>
>hotel/number

3. <font color="cyan">Required</font>
>rating = [interger]
    
4. <font color="gold">Example request</font>
>curl --location --request GET 'https//hotel-test-ywu6raktuq-uc.a.run.app/hotel/5'

<details><summary markdown="span">Result For Request based on Rating</summary>This endpoint is mainly to get the rating recommendation of users. There is a lot of data so we have to take 1 data as a sample

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
</details>

---

1. #### [List Hotel by Trending](#1--list-hotel-by-trending)
>https//hotel-test-ywu6raktuq-uc.a.run.app/trending/?page=number&offset=number

2. <font color="caulifower">Path</font>
>trending/?page=number&offset=number

3. <font color="cyan">Required</font>
>page=[interger]& offset=[interger]

4. <font color="gold">Example request</font>
>https//hotel-test-ywu6raktuq-uc.a.run.app/trending/?page=10&offset=0

<details><summary markdown="span">Result For Request based on Trending</summary>This endpoint is used to get the hotels that are trending or popular. There is a lot of data so we have to take 1 data as a sample

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
</details>

---

- <font color="orange">**Base URL**</font>
>https//hotel-test-ywu6raktuq-uc.a.run.app

1. #### [One Hotel Detail](#1--one-hotel-detail)
>https//hotel-test-ywu6raktuq-uc.a.run.app/hotel/details/number


2. <font color="caulifower">Method</font>
><Code><font color="yellow">POST</font></Code>

3. <font color="gold">Required</font>
>/[interger]

4. <font color="F32424">Example Request</font>
>curl --location --request POST 'https//hotel-test-ywu6raktuq-uc.a.run.app/hotel/details/50'

<details><summary markdown="span">Result For get the get details of one hotel</summary>This endpoint is used to get the details of one hotel.

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
</details>

---

1. #### [User Recommendation](#1--user-recommendation)
>https//hotel-test-ywu6raktuq-uc.a.run.app/user-recommendation/number

2. <font color="caulifower">Required</font>
>/[interger]

3. <font color="Gold">Example Request</font>
>curl --location --request POST 'https://hotel-test-ywu6raktuq-uc.a.run.app/user-recommendation/110' \
--header 'Authorization: Bearer {{accesstoken}}''

<details><summary markdown="span">Result For Request user preference to get reccomendation</summary>This Endpoint is used to get user preferences recommendation. Thre is a Lot of data so we have to take 1 data as a sample.

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
</details>

---

1. #### [Hotel Recommendation](#1--hotel-recommendation)
>https//hotel-test-ywu6raktuq-uc.a.run.app/hotel-recommendation/number

2. <font color="caulifower">Required</font>
>/[interger]

3. <font color="Gold">Example Request</font>
>curl --location --request POST 'https://hotel-test-ywu6raktuq-uc.a.run.app/hotel-recommendation/50' \
--header 'Authorization: Bearer {{accesstoken}}''

<details><summary markdown="span">Result For Get hotel recomendation </summary>This endpoint is used to get the hotel recommendation based on hotel. There is a lot of data so we have to take 1 data as a sample

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
</details>

---

1. #### [By Location Recommendation](#1--by-location-recommendation)
>https//hotel-test-ywu6raktuq-uc.a.run.app

2. <font color="caulifower">Required</font>
>/by-location

3. <font color="Gold">Example Request</font>
>curl --location --request POST 'https://hotel-test-ywu6raktuq-uc.a.run.app/by-location/' \
--header 'Authorization: Bearer {{accesstoken}}' \
--data-raw '{
    
    "longitude":-122.7,
    "latitude":-10.6
}'

<details><summary markdown="span">Result For Request hotel recomendation based on Location</summary>This endpoint is strictly for giving recommendation for users by their location.

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
</details>

---

1. #### [For You](#1--for-you)
>https://hotel-test-ywu6raktuq-uc.a.run.app

2. <font color="caulifower">Path</font>
>/for-you

3. <font color="gold">Example Request</font>
>curl --location --request POST 'https://hotel-test-ywu6raktuq-uc.a.run.app/for-you/' \
--data-raw '{
    "user_id":4,
    "longitude":12.7,
    "latitude":35.6
}'

<details><summary markdown="span">Result For Give User Perfect Reccomendation Request</summary>This endpoint is mainly used to give users the perfect recommendation for them. There is a lot of data so we have to take 1 data as a sample

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
</details>

---

### [Login-Register API](#login-register-api)
<span style="font-family:san-serif; font-size:15px;">In this Section, There is a Login-Register API That can be used as Login and Register System For Our Hotel apps. Response from each URL using JSON format.</span>

- <font color="crimson">**Base URL**</font>
>https//test1-ywu6raktuq-uc.a.run.app

1. #### [User Registration](#2--user-registration)
>https//test1-ywu6raktuq-uc.a.run.app/user/register

2. <font color="caulifower">Path</font>
>/user

3.  <font color="Red">Method</font>
><Code><font color="Yellow">POST</font></Code> 

4. <font color="gold">Example request</font>
>curl --location --request POST 'https//test1-ywu6raktuq-uc.a.run.app/user/register' \
--data-urlencode 'email=' \
--data-urlencode 'userName=' \
--data-urlencode 'password='

<details><summary markdown="span">Result For Request Registering User</summary>This endpoint is used to Registering User

```javascript
{
    "message" "successful"
}
```
</details>

---
1. #### [User Login](#1--user-login)
>https//test1-ywu6raktuq-uc.a.run.app/user

2. <font color="Red">Path</font>
>/login

3. <font color="Gold">Example Request</font>
>curl --location --request POST 'https//test1-ywu6raktuq-uc.a.run.app/user/login' \
--data-urlencode 'userName=' \
--data-urlencode 'password='

<details><summary markdown="span">Result For Request Login Without Google</summary>This endpoint is used to User Login Without Google

```javascript
{
    "message" "successful",
    "data" {
        "userId" 131,
        "accessToken" "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZyZWRkeWFuZHJlYXM0QGdtYWlsLmNvbSIsImlkIjoxMzEsInVzZXJOYW1lIjoiZnJlZGR5YW5kcmVhc2NoYW5kcmEiLCJpYXQiOjE2NTQzMzE2MDgsImV4cCI6MTY1NDMzMjUwOH0.wAcEjAF7SEOs4Rp9XpHhXYXn4FcS7qW9r2fIdVGY030"
    }
}
```
</details>

---

1. #### [Log in With Google](#1--log-in-with-google)
>https//test1-ywu6raktuq-uc.a.run.app/user/login/google?code={{codeToken}}

2. <font color="2666CF">Method</font>
><Code><font color="Green">GET</font></Code> 

3. <font color="Red">Example request</font>
>curl --location -g --request GET 'https//test1-ywu6raktuq-uc.a.run.app/user/login/google?code={{codeToken}}'

<details><summary markdown="span">Result For Request Login With Google</summary>This Endpoint is used to User Login With Google

```javascript
{
    "message" "successful",
    "data" {
        "userId" 131,
        "accessToken" "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZyZWRkeWFuZHJlYXM0QGdtYWlsLmNvbSIsImlkIjoxMzEsInVzZXJOYW1lIjoiZnJlZGR5YW5kcmVhc2NoYW5kcmEiLCJpYXQiOjE2NTQzMzQyNTYsImV4cCI6MTY1NDMzNTE1Nn0.BCM-f1dUbo_8seLtFchrWq1C7XvKAX1teCj5FZmbuJo"
    }
}
```
</details>

---
1. #### [Get user by ID](#1--get-user-by-id)
>https//test1-ywu6raktuq-uc.a.run.app/user/

2. <font color="Gold">Example request</font>
>curl --location --request GET 'https//test1-ywu6raktuq-uc.a.run.app/user/' \
--header 'Authorization Bearer •••••••'

<details><summary markdown="span">Result For Request Get the User By id</summary>This Endpoint is used to Get the User By id

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
</details>

---
1. #### [Refresh Login](#1--refresh-login)
>https//test1-ywu6raktuq-uc.a.run.app/user/login

2. <font color="caulifower">Required</font>
>/refresh-login

3. <font color="Gold">Example Request</font>
>curl --location --request GET 'https//test1-ywu6raktuq-uc.a.run.app/user/login/refresh-login'

<details><summary markdown="span">Result For Request to get a new 'access token' for getting session/to login.</summary>Request to get a new 'access token' for getting session/to login. This request will be use 'cache' that set to the client before in Login to do this request

```javascript
{
    "message" "successful",
    "data" {
        "userId" 131,
        "accessToken" "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZyZWRkeWFuZHJlYXM0QGdtYWlsLmNvbSIsImlkIjoxMzEsInVzZXJOYW1lIjoiZnJlZGR5YW5kcmVhc2NoYW5kcmEiLCJpYXQiOjE2NTQzMzIyNDUsImV4cCI6MTY1NDMzMzE0NX0.GKM2wqPEkx6lrL-ltT5DLnjIrZcw_fmD7imoMiARzzM"
    }
}
```
</details>

---

1. #### [Update User By ID](#1--update-user-by-id)
>https//test1-ywu6raktuq-uc.a.run.app/user/

2. <font color="caulifower">Method</font>
><Code><font color="#4B7BE5">PUT</font></Code> 

3. <font color="gold">Example Request</font>
>curl --location --request PUT 'https//test1-ywu6raktuq-uc.a.run.app/user/' \
--header 'Authorization Bearer •••••••'

<details><summary markdown="span">Result For Request to update user needs by looking for userId</summary>This Endpoint is used to update user needs by looking for userId

```javascript
{
    "message" "sucessfull"
}
```
</details>

---
1. #### [Logout](#1--logout)
>https//test1-ywu6raktuq-uc.a.run.app/user

2. <font color="caulifower">Required</font>
>/logout

3. <font color="cyan">Method</font>
><Code><font color="F32424">DELETE</font></Code>

4. <font color="gold">Example Request</font>
>curl --location --request DELETE 'https//test1-ywu6raktuq-uc.a.run.app/user/logout'

<details><summary markdown="span">Result For Logout session by delete the 'refresh token' in cache</summary>Logout session by delete the 'refresh token' in cache

```javascript
{
    "message" "successful"
}
```
</details>

---

### [Review-API](#review-api)
<span style="font-family:san-serif; font-size:15px;">In this Section, There is a Review-API that can be used to create, manage, update, and delete through our hotel apps. Response from each URL using JSON format.</span>


1. #### [Create Review Based on the userId and hotelId](#1--create-review-based-on-the-userid-and-hotelid) 
>https//review-ywu6raktuq-uc.a.run.app/reviews/{{hotelId}}/{{userId}}

2. <font color="crimson">**Base URL**</font>
>https//review-ywu6raktuq-uc.a.run.app

3. <font color="magenta">Path</font>
>/reviews

4. <font color="orange">Required</font>
>/{hotelId} as [interger]/ {userId} as [interger]

5. <font color="teal">Method</font>
><Code><font color="Yellow">POST</font></Code>

6. <font color="gold">Example Request</font>
>curl --location -g --request POST 'https//review-ywu6raktuq-uc.a.run.app/reviews/{{hotelId}}/{{userId}}' \
--header 'Authorization Bearer {{accessToken}}' \
--data-raw '{
    "text""the door makes stupid sound",
    "rating" 2
}'

<details><summary markdown="span">Result For Request to creates new reviews based on specific hotelId and userId</summary>This endpoint to creates new reviews based on specific hotelId and userId</span>

```javascript
{
    "message" "post review success"
}
```
</details>

---
1. #### [Find All Reviews](#1--find-all-reviews)
>https//review-ywu6raktuq-uc.a.run.app/reviews

2. <font color="orange">Method</font>
><Code><font color="Green">GET</font></Code> 

3. <font color="gold">Example Request</font>
>curl --location --request GET 'https//review-ywu6raktuq-uc.a.run.app/reviews'

<details><summary markdown="span">Result For Request to get all the reviews</summary>This endpoint is used to list all the reviews. This endpoint will display a lot of data. We only take 1 data as a sample</span>

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
</details>

---
1. #### [Find Reviews By Hotel Id](#1--find-reviews-by-hotel-id)
>https//review-ywu6raktuq-uc.a.run.app/reviews

2. <font color="orange">Required</font>
>/{hotelId} as [interger]?page&offset

3. <font color="gold">Example Request</font>
>curl --location -g --request GET 'https//review-ywu6raktuq-uc.a.run.app/reviews/{{hotelId}}?page&offset'

<details><summary markdown="span">Result For Request to get all reviews regarding to specific hotelId</summary>This endpoint is used to list all reviews regarding to specific hotelId. In the real test on postman there is 101 data so we take 1 data for sample

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
</details>

---

1. #### [Find Reviews By Hotel Id and User Id](#1--find-reviews-by-hotel-id-and-user-id)
>https//review-ywu6raktuq-uc.a.run.app/reviews

2. <font color="orange">Required</font>
>/{hotelId} as [interger]/{userId} as [interger]

3. <font color="gold">Example Request</font>
>curl --location -g --request GET 'https//review-ywu6raktuq-uc.a.run.app/reviews/{{hotelId}}/{{userId}}'

<details><summary markdown="span">Result For Request to list all reviews regarding to specific hotelId and userId</summary>This endpoint is used to list all reviews regarding to specific hotelId and userId

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
</details>

---

1. #### [Find Specific Review By Hotel Id, User Id, and Review Id](#1--find-reviews-by-hotel-id--find-reviews-by-user-id--find-reviews-by-review-id)
>https//review-ywu6raktuq-uc.a.run.app/reviews

2. <font color="orange">Required</font>
>/{hotelId} as [interger]/{userId} as [interger]/{reviewId} as [interger]

3. <font color="gold">Example Request</font>
>curl --location -g --request GET 'https//review-ywu6raktuq-uc.a.run.app/reviews/{{hotelId}}/{{userId}}/{{reviewId}}'

<details><summary markdown="span">Result For Request to list all reviews regarding to specific hotelId , userId, and reviewId itself</summary>This endpoint is used to list all reviews regarding to specific hotelId , userId, and reviewId itself

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
</details>

---

1. #### [Update By Review Id](#1--update-by-review-id)
>https//review-ywu6raktuq-uc.a.run.app/reviews

2. <font color="orange">Required</font>
>/{hotelId} as [interger]/{userId} as [interger]/{reviewId} as [interger]

3. <font color="gold">Example Request</font>
>curl --location -g --request PUT 'https//review-ywu6raktuq-uc.a.run.app/reviews/{{hotelId}}/{{userId}}/{{reviewId}}' \
--header 'Authorization Bearer {{accessToken}}' \
--data-raw '{
    "text" "the bed so comfy",
    "rating" 4
}'

<details><summary markdown="span">Result For Request to edit the reviews regarding to specific hotelId , userId, and reviewId itself</summary>This endpoint is used to allow users edit their reviews regarding to specific hotelId , userId, and reviewId itself

```javascript
{
    "message" "review was updated successfully."
}
```
</details>

---

1. #### [Delete By Review Id](#1--delete-by-review-id)
>https//review-ywu6raktuq-uc.a.run.app/reviews

2. <font color="orange">Required</font>
>/{hotelId} as [interger]/{userId} as [interger]/{reviewId} as [interger]

3. <font color="gold">Example Request</font>
>curl --location -g --request DELETE 'https//review-ywu6raktuq-uc.a.run.app/reviews/{{hotelId}}/{{userId}}/{{reviewId}}' \
--header 'Authorization Bearer {{accessToken}}'

<details><summary markdown="span">Result For Request to delete their reviews regarding to specific hotelId , userId, and reviewId itself</summary>This endpoint is used to allow users delete their reviews regarding to specific hotelId , userId, and reviewId itself

```javascript
{
    "message" "review was deleted successfully!"
}
```
</details>

---
<span style="font-family:san-serif; font-size:40px;">Thank You For the Oppoturnity</span>