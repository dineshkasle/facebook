import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  myPost = [];
  public textArea: string = '';
  public isEmojiPickerVisible: boolean;
  public addEmoji(event) {
    this.textArea = `${this.textArea}${event.emoji.native}`;
    this.isEmojiPickerVisible = false;
  }
  emojiFallback = (emoji: any, props: any) =>
    emoji ? `:${emoji.shortNames[0]}:` : props.emoji;
  constructor() { }

  ngOnInit(): void {
    this.myPost = [{
      imgUri: "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg",
      userName: 'I am Programmer,I have no life.',
      location: '9h . ',
      mainImgUrl: 'https://cdn.vox-cdn.com/thumbor/FOIV1c1Eq9Y1HQq-Sn1RgReLp0E=/0x0:735x500/920x613/filters:focal(310x192:426x308):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66727168/image.0.png',
      likes: 1823,
      likeClass:'fa fa-heart-o ',
      likedImage:false
    },
      {
        imgUri: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",
        userName: 'Sarcasm',
        location: '12h . ',
        mainImgUrl: 'https://imgk.timesnownews.com/story/Won.png?tr=w-400,h-300,fo-auto',
        likes: 2500,
        likeClass:'fa fa-heart-o ',
        likedImage:false
      },
      {
        imgUri: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-1.jpg",
        userName: "Danny D'suza",
        location: '5h . ',
        mainImgUrl: 'https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-1.jpg',
        likes: 5000,
        likeClass:'fa fa-heart-o ',
        likedImage:false
      }];
  }

  likePost(index){
    this.myPost[index].likedImage = true;
    setTimeout( ()=>{
      this.myPost[index].likedImage = false;
    },1000);
    if(this.myPost[index].likeClass === 'fa fa-heart-o '){
      this.myPost[index].likeClass = 'fa fa-heart red';
    }else {
      this.myPost[index].likeClass = 'fa fa-heart-o ';
    }
  }

  likedPost(index){
    if(this.myPost[index].likeClass === 'fa fa-heart-o '){
      this.myPost[index].likeClass = 'fa fa-heart text-info';
    }else {
      this.myPost[index].likeClass = 'fa fa-heart-o ';
    }
  }

}
