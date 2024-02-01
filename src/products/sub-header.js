import Grocery from "../assets/sub-header/grocery.png"
import Electronic from "../assets/sub-header/electronic.png"
import HomeFur from "../assets/sub-header/home-and-furniture.jpg"
import Mobile from "../assets/sub-header/mobiles.png"
import Fashion from "../assets/sub-header/fashion.png"

export const data = [
            { id:1, "title":"Grocery","img":Grocery},
            {id:2,"title":"Mobile","img":Mobile},
            {id:3,"title":"Fashion", "img":Fashion,"names":[
                {"title":"Mens top wear", "names":[
                    {id:6,"title":"All"},
                    {id:7,"title":"Men's T-Shirts"},
                    {id:8,"title":"Men's Casual Shirts"},
                    {id:Date.now(),"title":"Men's Formal Shirts"}
                ]},
                {
                    "title":"Mens Bottom Wear",
                    "names":[
                        {id:18,"title":"All"},
                        {id:19,"title":"Men's Jeans"},
                        {id:20,"title":"Men's Trousers"},
                        {id:Date.now(),"title":"Men's Trackpants"}

                    ]
                },
                {
                    "title":"Women Ethnics",
                    "names":[
                        {id:10,"title":"All"},
                        {id:11,"title":"Wome Sarees"},
                        {id:12,"title":"Women Kurtas & Kurtis"},
                        {id:Date.now(),"title":"Ethnic Dresses"}
                    ]
                },
                {
                    "title":"Men Footwear",
                    "names":[
                        {id:18,"title":"All"},
                        {id:19,"title":"Men's Sports Shoes"},
                        {id:20,"title":"Men's Casual Shoes"},
                        {id:Date.now(),"title":"Men's Ethnic Shoes"},
                    ]
                }
            ]},
            {
                id:4,"title":"Home & Fruniture","img":HomeFur,"names":[
                {id:5,"title":"Home Furnishings", "names":[
                    {id:6,"title":"All"},
                    {id:7,"title":"Bed Linens"},
                    {id:8,"title":"Bedsheets"},
                    {id:Date.now(),"title":"Blankets"}
                ]},
                {
                    id:9,"title":"Living Room Furniture",
                    "names":[
                        {id:10,"title":"All"},
                        {id:11,"title":"Dinning Sets"},
                        {id:12,"title":"Sofa Beds"},
                        {id:Date.now(),"title":"Sofa Recliners"}
                    ]
                },
                {
                    id:13,"title":"Bed Room Furniture",
                    "names":[
                        {id:14,"title":"Mattresse"},
                        {id:15,"title":"Beds"},
                        {id:16,"title":"Side Tables"},
                        {id:Date.now(),"title":"Office Tables"},
                    ]
                },
                {
                    id:17,"title":"Home Decore",
                    "names":[
                        {id:18,"title":"All"},
                        {id:19,"title":"Lightnings"},
                        {id:20,"title":"Clocks"},
                        {id:Date.now(),"title":"Wall Decore"}
                    ]
                }
            ]},
            {
                id:21,
                "title":"Electronics","img":Electronic,
            }
]