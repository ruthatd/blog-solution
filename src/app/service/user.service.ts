import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor() { }

  public users: User[] = [
    {
      id: 1,
      name: "Sachin Gupta",
      profession: "SWE",
      location: "Delhi",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean orci leo, eleifend vel eleifend sed, euismod vitae lacus.",
      posts: [
        {
          post_id:1,
          post_title: "How to add button in html?",
          post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean orci leo, eleifend vel eleifend sed, euismod vitae lacus. Nullam interdum nunc et leo viverra, nec semper quam mattis. Pellentesque sem ipsum, convallis eget massa pharetra, elementum ornare urna. Nam tempus neque eget sagittis vestibulum. Vivamus metus elit, convallis sed lorem a, elementum scelerisque urna. Sed laoreet facilisis finibus. Mauris a gravida justo, sit amet malesuada felis. In hac habitasse platea dictumst. Nulla vitae mattis enim, sed semper lacus. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla neque ligula, venenatis id mollis non, ultrices.",
          created_on: new Date("02/19/2020"),
          likes: 23,
          isLiked: false,
          comments:["hi","nice post"],
          author_name: "Sachin Gupta",
          author_id:1
        },

        {
          post_id:2,
          post_title: "How to travel to europe?",
          post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean orci leo, eleifend vel eleifend sed, euismod vitae lacus. Nullam interdum nunc et leo viverra, nec semper quam mattis. Pellentesque sem ipsum, convallis eget massa pharetra, elementum ornare urna. Nam tempus neque eget sagittis vestibulum. Vivamus metus elit, convallis sed lorem a, elementum scelerisque urna. Sed laoreet facilisis finibus. Mauris a gravida justo, sit amet malesuada felis. In hac habitasse platea dictumst. Nulla vitae mattis enim, sed semper lacus. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla neque ligula, venenatis id mollis non, ultrices.",
          created_on: new Date("01/15/2022"),
          likes: 119,
          isLiked: true,
          comments:["hi"],
          author_name: "Sachin Gupta",
          author_id:1
        },

        {
          post_id:3,
          post_title: "Bake a cake !",
          post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean orci leo, eleifend vel eleifend sed, euismod vitae lacus. Nullam interdum nunc et leo viverra, nec semper quam mattis. Pellentesque sem ipsum, convallis eget massa pharetra, elementum ornare urna. Nam tempus neque eget sagittis vestibulum. Vivamus metus elit, convallis sed lorem a, elementum scelerisque urna. Sed laoreet facilisis finibus. Mauris a gravida justo, sit amet malesuada felis. In hac habitasse platea dictumst. Nulla vitae mattis enim, sed semper lacus. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla neque ligula, venenatis id mollis non, ultrices.",
          created_on: new Date("1/02/2021"),
          likes: 543,
          isLiked: false,
          comments:["hi","nice post","3rd post by sachin"],
          author_name: "Sachin Gupta",
          author_id:1
        }
      ]
    },

    {
      id: 2,
      name: "Jack Sparrow",
      profession: "Pirate",
      location: "Caribbean",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean orci leo, eleifend vel eleifend sed, euismod vitae lacus.",
      posts: [
        {
          post_id:4,
          post_title: "How to rob a ship?",
          post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean orci leo, eleifend vel eleifend sed, euismod vitae lacus. Nullam interdum nunc et leo viverra, nec semper quam mattis. Pellentesque sem ipsum, convallis eget massa pharetra, elementum ornare urna. Nam tempus neque eget sagittis vestibulum. Vivamus metus elit, convallis sed lorem a, elementum scelerisque urna. Sed laoreet facilisis finibus. Mauris a gravida justo, sit amet malesuada felis. In hac habitasse platea dictumst. Nulla vitae mattis enim, sed semper lacus. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla neque ligula, venenatis id mollis non, ultrices.",
          created_on: new Date("10/15/2002"),
          likes: 1011,
          isLiked: true,
          comments:["Let's do it!","should use angular for frontend"],
          author_name: "Jack Sparrow",
          author_id:2
        },

        {
          post_id:5,
          post_title: "Let's find the treasure!",
          post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean orci leo, eleifend vel eleifend sed, euismod vitae lacus. Nullam interdum nunc et leo viverra, nec semper quam mattis. Pellentesque sem ipsum, convallis eget massa pharetra, elementum ornare urna. Nam tempus neque eget sagittis vestibulum. Vivamus metus elit, convallis sed lorem a, elementum scelerisque urna. Sed laoreet facilisis finibus. Mauris a gravida justo, sit amet malesuada felis. In hac habitasse platea dictumst. Nulla vitae mattis enim, sed semper lacus. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla neque ligula, venenatis id mollis non, ultrices.",
          created_on: new Date("1/10/2004"),
          likes: 1092018,
          isLiked: true,
          comments:["Let's do it!"],
          author_name: "Jack Sparrow",
          author_id:2
          
        }
      ]
    },

    {
      id: 3,
      name: "Pushpa",
      profession: "Smuggler",
      location: "Tamil Nadu",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean orci leo, eleifend vel eleifend sed, euismod vitae lacus.",
      posts: [
        {
          post_id:6,
          post_title: "How to smuggle Red Sandalwood?",
          post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean orci leo, eleifend vel eleifend sed, euismod vitae lacus. Nullam interdum nunc et leo viverra, nec semper quam mattis. Pellentesque sem ipsum, convallis eget massa pharetra, elementum ornare urna. Nam tempus neque eget sagittis vestibulum. Vivamus metus elit, convallis sed lorem a, elementum scelerisque urna. Sed laoreet facilisis finibus. Mauris a gravida justo, sit amet malesuada felis. In hac habitasse platea dictumst. Nulla vitae mattis enim, sed semper lacus. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla neque ligula, venenatis id mollis non, ultrices.",
          created_on: new Date("05/01/2022"),
          likes: 1409,
          isLiked: true,
          comments:["Rukne ka nahi!","It's dangerous"],
          author_name: "Pushpa",
          author_id:3
        },
      ]
    },

    {
      id: 4,
      name: "Arnold",
      profession: "Body Builder",
      location: "U.S.A",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean orci leo, eleifend vel eleifend sed, euismod vitae lacus.",
      posts: []
    }

  ];
}
