import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app3';


  ngOnInit(): void {
    var firebaseConfig = {
      apiKey: "AIzaSyCHeZqJaHvITM414IxRxiqn9cuhWYQdnPU",
      authDomain: "instagram-clone-1534f.firebaseapp.com",
      databaseURL: "https://instagram-clone-1534f.firebaseio.com",
      projectId: "instagram-clone-1534f",
      storageBucket: "instagram-clone-1534f.appspot.com",
      messagingSenderId: "785692539093",
      appId: "1:785692539093:web:dac822f549c273c939ca5c"
    };
    firebase.initializeApp(firebaseConfig)
  }

}


