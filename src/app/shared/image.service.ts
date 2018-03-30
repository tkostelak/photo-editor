import { Injectable } from '@angular/core'

@Injectable()
export class ImageService{
  visibleImages = [];
  getImages(){
    return this.visibleImages = Images.slice(0);
  }

  getImage(id: number){
    return Images.slice(0).find(image => image.id === id)
  }
}

const Images = [
  {'id': 1, 'category': 'animals', 'caption': 'What an adorable cat', 'url': 'assets/img/animals_01.jpg'},
  {'id': 2, 'category': 'animals', 'caption': 'What an adorable dog', 'url': 'assets/img/animals_02.jpg'},
  {'id': 3, 'category': 'travel', 'caption': 'Pyramids of Giza at sunset', 'url': 'assets/img/travel_01.jpg'},
  {'id': 4, 'category': 'animals', 'caption': 'What a majestic fox', 'url': 'assets/img/animals_03.jpg'},
  {'id': 5, 'category': 'people', 'caption': 'Breathtaking shot of children in the Himalayas', 'url': 'assets/img/people_01.jpg'}
]