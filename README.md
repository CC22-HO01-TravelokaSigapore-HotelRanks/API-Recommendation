# Cloud Computing Path

Creating RESTful APIs and deploying to Google Cloud Platform using [Google Cloud Run](https//cloud.google.com/run) for communication between Machine Learning Model and Mobile Development. Creating database in [Google Cloud SQL](https//cloud.google.com/sql).

## RESTful APIs

In making the RESTful APIs we use [NodeJS](https//nodejs.org/en/) with some other dependencies which are [Sequelize](https//sequelize.org), [ExpressJS](https//expressjs.com), [CORS](https//enable-cors.org/index.html).

## List APIs services

In this section there is a list of all Hotel APIs that can be Sorted

 1. API-Hotel
 2. Login-Register API
 3. Review API

---

## **API Hotel**

In this section there is a Hotel API that can be used to be main foundation of our hotel apps. Response from each URL using JSON format. For further documentation and parameter can be used for each endpoint, please seek for this link [API-Hotel](https://documenter.getpostman.com/view/21073398/Uyxogi87)

**Base URL:**
><https://hotel-test-ywu6raktuq-uc.a.run.app>

**Method:**
>GET

- **Show List All Hotels**
    ><https://hotel-test-ywu6raktuq-uc.a.run.app/>**hotel/list**

    This API is mainly to get the list of the hotel for the users and also get the list of the hotel based on attributes with Query Param. Here just 1 sample response data for doc purposes

    **Optional:**

  - <details markdown=span>

    <summary markdown=span><b>Query Params</b></summary>

      | Query | Value |
      | ------ | ------ |
      | name | string |
      | neighborhood | string |
      | hotel_star | int |
      | price_per_night | int |
      | free_refund | boolean |
      | type_nearby_destination | string |
      | nearby_destination | int |
      | breakfast | boolean |
      | pool | boolean |
      | wifi | boolean |
      | parking | boolean |
      | smoking | boolean |
      | air_conditioner | boolean |
      | wheelchair_access | boolean |
      | average_bed_size | boolean |
      | staff_vaccinated | boolean |
      | child_area | boolean |
      | price_category | int |
      | page | int |
      | offset | int |

    </details><br>

  **Response:**

    ```JSON
    {
        "message": "Success",
        "data": [
            {
                "type_nearby_destination": [
                    "family park",
                    " botanical"
                ],
                "image_links": [
                    "https//media-cdn.tripadvisor.com/media/vr-splice-j/06/62/d3/ff.jpg",
                    " https//media-cdn.tripadvisor.com/media/vr-splice-j/03/5c/32/76.jpg",
                    " https//media-cdn.tripadvisor.com/media/vr-splice-j/03/5c/32/d3.jpg",
                    " https//media-cdn.tripadvisor.com/media/vr-splice-j/03/5c/33/2d.jpg",
                    " https//q-xx.bstatic.com/xdata/images/hotel/max1024x768/59560252.jpg?k=4f58bd80c52da6a0db7482fac8c83572a180b36173856c6850b551325a77ae88&o="
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
            },...
        ]
    }
    ```

- **Show List Hotels By Search**
    ><https://hotel-test-ywu6raktuq-uc.a.run.app/>**search?keyword=name**

    This endpoint mainly for searching purposes. The "keyword" parameter is a must when searching. In this example we use "keyword=bali".

    **Required:**

  - **Query Params:**

    | Query | Value |
    | ------ | ------ |
    | keyword | string |

  **Optional:**

  - **Query Params:**

    | Query | Value |
    | ------ | ------ |
    | page | int |
    | offset | int |

  **Response:**

    ```JSON
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
            },...
        ]
    }
    ```

- **Show List Hotels By Rating**
    ><https://hotel-test-ywu6raktuq-uc.a.run.app/>**hotel/{rating}**

    This endpoint will result list of hotels based on its rating. The "{rating}" path parameter is a must when searching. In this example we use "hotel/4".

    **Required:**

    - **Path Params**

    **Optional:**

  - **Query Params:**

    | Query | Value |
    | ------ | ------ |
    | page | int |
    | offset | int |

  **Response:**

    ```JSON
    {
        "message": "Success",
        "data": [
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
            },...
        ]
     }
    ```

- **Show List Hotels By Trending**
    ><https://hotel-test-ywu6raktuq-uc.a.run.app/>**trending/**

    This endpoint will result list of hotels that are trending and popular.

    **Optional:**

  - **Query Params:**

    | Query | Value |
    | ------ | ------ |
    | page | int |
    | offset | int |

  **Response:**

    ```JSON
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
            },...
        ]
    }
    ```

---

**Method:**
>POST

- **Show Detail of One Hotel**
    ><https://hotel-test-ywu6raktuq-uc.a.run.app/>**hotel/details/{hotel_id}**

    This endpoint is to get the details of one hotel. For example here hotel with id=50.

    **Required:**

    - **Path Params**

    **Response:**

    ```JSON
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

- **Show Hotel List Based On User Preferences**
    ><https://hotel-test-ywu6raktuq-uc.a.run.app/>**user-recommendation/{user_id}**

    This endpoint is used to get user preferences recommendation, and return the data of hotel that
    fulfill the related user preferences.

    **Required:**

    - **Path Params**

    - **Request Headers:**

      | Headers | Value |
      | ------ | ------ |
      | Authorization | Bearer {accessToken} |

    **Response:**

    ```JSON
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
        }
      ]
    }
    ```

- **Show Hotel List Based On Similar Hotel**
    ><https://hotel-test-ywu6raktuq-uc.a.run.app/>**hotel-recommendation/{hotel_id}**

    This endpoint is to get the result of similar hotel recommendation based on the related hotel/hotel_id.

    **Required:**

    - **Path Params**

    - **Request Headers:**

      | Headers | Value |
      | ------ | ------ |
      | Authorization | Bearer {accessToken} |

    **Response:**

    ```JSON
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
        }
      ]
    }
    ```

- **Show Hotel List Based On Location**
    ><https://hotel-test-ywu6raktuq-uc.a.run.app/>**hotel-recommendation/by-location/**

    This endpoint is strictly for giving recommendation for users by their location.

    **Required:**

    - **Request Headers:**

      | Headers | Value |
      | ------ | ------ |
      | Authorization | Bearer {accessToken} |

    - **Request Body:**

      ```JSON
      {
          "longitude": -122.7,
          "latitude": -10.6
      }
      ```

    **Response:**

    ```JSON
    {
    "message": "Success",
    "data": [
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
        }
      ]
    }
    ```

- **Show Hotel List Based On User Preferences + Location (For-You)**
    ><https://hotel-test-ywu6raktuq-uc.a.run.app/>**for-you/**

    This endpoint is mainly used to give users the perfect recommendation for them.

    **Required:**

    - **Request Headers:**

      | Headers | Value |
      | ------ | ------ |
      | Authorization | Bearer {accessToken} |

    - **Request Body:**

      ```JSON
      {
          "user_id": 4,
          "longitude": 12.7,
          "latitude": 35.6
      }
      ```

    **Response:**

    ```JSON
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

---

## **API Login-Register**

In this Section, There is a Login-Register API That can be used as Login and Register System For Our Hotel apps. Response from each URL using JSON format. For further documentation, please seek for this link [API Login-Register](https://documenter.getpostman.com/view/21020193/UyxoiPz8)

**Base URL:**
><https://test1-ywu6raktuq-uc.a.run.app>

**Method:**
>POST

- **User Register**
    ><https://test1-ywu6raktuq-uc.a.run.app/>**user/register**

    This endpoint to create new users.

    **Required:**

  - **Request Body:**

    ```JSON
    {
      "email": "email@email.com",
      "userName": "userName",
      "password": "password"
    }
    ```

    **Response:**

    ```JSON
    {
      "message": "sucessfull",
    }
    ```

- **User Login**
    ><https://test1-ywu6raktuq-uc.a.run.app/>**user/login**

    This endpoint to authenticate users.
    This endpoint also set refreshToken on Cookie headers.

    **Required:**

  - **Request Body:**

    ```JSON
    {
      "userName": "userName",
      "password": "password"
    }
    ```

  **Response:**

    ```JSON
    {
      "message": "successful",
      "data": {
          "userId": 136,
          "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImlkIjoxMzYsInVzZXJOYW1lIjoidXNlcm5hbWUiLCJpYXQiOjE2NTQ2NjkwNzAsImV4cCI6MTY1NDY3MDg3MH0.kLWLdckIwj86XrKPvriXebxjgL0X29aYujgTQ5K80EU",
          "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImlkIjoxMzYsInVzZXJOYW1lIjoidXNlcm5hbWUiLCJpYXQiOjE2NTQ2NjkwNzAsImV4cCI6MTY1NzI2MTA3MH0.yv25IJBlg9Ba-TZX5n_RAks0mdyZ_IGux1oFNT3fnLo"
      }
    }
    ```

---

**Method:**
>GET

- **User Login with Google**
    ><https://test1-ywu6raktuq-uc.a.run.app/>**user/login/google?code={codeToken}**

    This endpoint is one of the step in Oauth2 flow. This endpoint receive users that have already allowed our apps to user their Google Account, and this step implemented on the **"Mobile Development side"** after that MD team simply lend the codeToken/AuthorizationCode to this endpoint, then our backend will retrieve the user info and profile.
    This endpoint also set refreshToken on Cookie headers.

    **Required:**

  - **Query Params:**

    | Query | Value |
    | ------ | ------ |
    | code | codeToken |

  **Response:**
    *not real cases/similar to this below

    ```JSON
    {
      "message": "successful",
      "data": {
          "userId": 136,
          "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImlkIjoxMzYsInVzZXJOYW1lIjoidXNlcm5hbWUiLCJpYXQiOjE2NTQ2NjkwNzAsImV4cCI6MTY1NDY3MDg3MH0.kLWLdckIwj86XrKPvriXebxjgL0X29aYujgTQ5K80EU",
          "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImlkIjoxMzYsInVzZXJOYW1lIjoidXNlcm5hbWUiLCJpYXQiOjE2NTQ2NjkwNzAsImV4cCI6MTY1NzI2MTA3MH0.yv25IJBlg9Ba-TZX5n_RAks0mdyZ_IGux1oFNT3fnLo"
      }
    }
    ```

- **Get User info By Id**
    ><https://test1-ywu6raktuq-uc.a.run.app/>**user/{userId}**

    This endpoint is mainly to retrieve user info that already pass the authentication.

    **Required:**

  - **Path Params**

  - **Request Headers:**

    | Headers | Value |
    | ------ | ------ |
    | Authorization | Bearer {accessToken} |

  **Response:**

    ```JSON
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
          "id": 136,
          "name": null,
          "birth_date": null,
          "nid": null,
          "family": false,
          "email": "email@email.com",
          "userName": "username",
          "reviewCounter": 0,
          "createdAt": "2022-06-08T06:17:41.000Z",
          "updatedAt": "2022-06-08T06:17:41.000Z"
      }
    }
    ```

- **Refresh Login Session**
    ><https://test1-ywu6raktuq-uc.a.run.app/>**user/login/refresh-login**

    This endpoint is mainly to get new accessToken.

    **Required:**

  - **Request Headers:**

    | Headers | Value |
    | ------ | ------ |
    | Cookie | refreshToken=xxxxxxxxxxx |

  **Response:**

    ```JSON
    {
      "message": "successful",
      "data": {
          "userId": 136,
          "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImlkIjoxMzYsInVzZXJOYW1lIjoidXNlcm5hbWUiLCJpYXQiOjE2NTQ2NzI3MDksImV4cCI6MTY1NDY3NDUwOX0.DSjy1rF-_acCk96IKr7lhAc3RCZpwaZ26hk4sldSfGc"
      }
    }
    ```

---

**Method:**
>PUT

- **Update User info By Id**
    ><https://test1-ywu6raktuq-uc.a.run.app/>**user/{userId}**

    This endpoint is mainly to retrieve user info that already pass the authentication.

    **Required:**

  - **Path Params**

  - **Request Headers:**

    | Headers | Value |
    | ------ | ------ |
    | Authorization | Bearer {accessToken} |

  - **Request Body:**

      ```JSON
      {
          "name": string,
          "birth_date": date,
          "nid": integer,
          "family": boolean,
          "hobby": string,
          "search_history": string,
          "stay_history": string,
          "special_needs": string,
      }
      ```

  **Response:**

    ```JSON
    {
      "message": "sucessfull",
    }
    ```

---

**Method:**
>DELETE

- **User logout**
    ><https://test1-ywu6raktuq-uc.a.run.app/>**user/logout**

    This endpoint is mainly to delete session in a way delete refreshToken Cookie.

  **Response:**

    ```JSON
    {
      "message": "sucessfull",
    }
    ```

---

## **API Review**

In this Section, There is a Review API that can be used to create, manage, update, and delete through our hotel apps. Response from each URL using JSON format. For further documentation, please seek for this link [API Review](https://documenter.getpostman.com/view/21020193/Uz5CMJN1)

**Base URL:**
><https://review-ywu6raktuq-uc.a.run.app>

**Method:**
>POST

- **Post Review By Hotel Id and User Id**
    ><https://review-ywu6raktuq-uc.a.run.app/>**reviews/{hotelId}/{userId}**

    This endpoint is mainly to create review with related {hotelId} and {userId}.

    **Required:**

  - **Path Params**

  - **Request Headers:**

    | Headers | Value |
    | ------ | ------ |
    | Authorization | Bearer {accessToken} |

  - **Request Body:**

      ```JSON
      {
        "text":"the door makes stupid sound",
        "rating": 2
      }
      ```

  **Response:**

    ```JSON
    {
      "message": "post review success"
    }
    ```

---

**Method:**
>GET

- **Get All Reviews**
    ><https://review-ywu6raktuq-uc.a.run.app/>**reviews**

     This endpoint is mainly to retrieve all reviews within database.

     **Response:**

    ```JSON
    [
      {
          "id": 1,
          "text": "the staff were lovely and it is a good location",
          "labels": 1,
          "rating": 4,
          "dates": "2022-01-05T08:02:44.000Z",
          "hotel_id": 21,
          "user_id": 6
      },
      {
          "id": 3,
          "text": "wonderfully located old world charm in the heart of london great food room service",
          "labels": 1,
          "rating": 5,
          "dates": "2022-04-18T08:44:01.000Z",
          "hotel_id": 27,
          "user_id": 65
      },
      {
          "id": 4,
          "text": "superb staff very helpful and friendly our suite was awesome thanks charles",
          "labels": 1,
          "rating": 5,
          "dates": "2022-02-05T23:14:21.000Z",
          "hotel_id": 53,
          "user_id": 70
      },...
    ]
    ```

- **Get Reviews By Hotel Id**
    ><https://review-ywu6raktuq-uc.a.run.app/>**reviews/{hotelId}**

     This endpoint is mainly to retrieve all reviews related with {hotelId}.

     **Required:**

    - **Path Params**

     **Optional:**

    - **Query Params**

      | Query | Value |
      | ------ | ------ |
      | page | int |
      | offset | int |

  **Response:**

    ```JSON
    {
      "message": "successful",
      "total": 99,
      "data": [
          {
              "id": 149,
              "text": "far from city shuttle to metro at evening costs euro for person wifi costs euro per day there was humidity under shower",
              "labels": 0,
              "rating": 3,
              "dates": "2022-03-30T21:35:23.000Z",
              "user_id": 46,
              "name": "Tgk. Cakrajiya Saputra, S.Ked"
          },
          {
              "id": 162,
              "text": "the breakfast was one of the poorest i v had in a hotel nothing hot not even toast just cold ham cheese and rolls happy shopper yoghurts that said p on them the only hot food you could have was boiled eggs but you would have to cook them yourself",
              "labels": 0,
              "rating": 3,
              "dates": "2022-04-15T17:36:23.000Z",
              "user_id": 29,
              "name": "Ina Firmansyah"
          },...
      ]
    }
    ```

- **Get Reviews By Hotel Id and User Id**
    ><https://review-ywu6raktuq-uc.a.run.app/>**reviews/{hotelId}/{userId}**

     This endpoint is mainly to retrieve all reviews related with {hotelId} and {userId}.

     **Required:**

    - **Path Params**

  **Response:**

    ```JSON
    {
      "message": "successful",
      "data": [
          {
              "id": 5122,
              "text": "the room service cheese platter was very poor value for money euros for three small pieces of cheese the other room service meals were very good value so it was very strange",
              "labels": 0,
              "rating": 2,
              "dates": "2022-01-13T07:14:04.000Z"
          }
      ]
    }
    ```

- **Get Reviews By Hotel Id, User Id and Review Id**
    ><https://review-ywu6raktuq-uc.a.run.app/>**reviews/{hotelId}/{userId}/{reviewId}**

     This endpoint is mainly to retrieve specific review related with {reviewId}.

     **Required:**

    - **Path Params**

  **Response:**

    ```JSON
    {
      "message": "successful",
      "data": {
          "id": 5122,
          "text": "the room service cheese platter was very poor value for money euros for three small pieces of cheese the other room service meals were very good value so it was very strange",
          "labels": 0,
          "rating": 2,
          "dates": "2022-01-13T07:14:04.000Z",
          "name": "R.M. Ian Damanik, S.Kom"
      }
    }
    ```

---

**Method:**
>PUT

- **Update Reviews By Hotel Id, User Id and Review Id**
    ><https://review-ywu6raktuq-uc.a.run.app/>**reviews/{hotelId}/{userId}/{reviewId}**

     This endpoint is mainly to update specific review related with {reviewId}.

     **Required:**

  - **Path Params**

  - **Request Headers:**

    | Headers | Value |
    | ------ | ------ |
    | Authorization | Bearer {accessToken} |

  - **Request Body:**

      ```JSON
      {
        "text":"the door makes good sound",
        "rating": 4.8
      }
      ```

  **Response:**

    ```JSON
    {
      "message": "review was updated successfully.",
    }
    ```

---

**Method:**
>DELETE

- **Delete Reviews By Hotel Id, User Id and Review Id**
    ><https://review-ywu6raktuq-uc.a.run.app/>**reviews/{hotelId}/{userId}/{reviewId}**

     This endpoint is mainly to delete specific review related with {reviewId}.

     **Required:**

  - **Path Params**

  - **Request Headers:**

    | Headers | Value |
    | ------ | ------ |
    | Authorization | Bearer {accessToken} |

  **Response:**

    ```JSON
    {
      "message": "review was deleted successfully!",
    }
    ```
