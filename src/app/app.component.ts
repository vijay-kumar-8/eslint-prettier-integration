import { Component } from '@angular/core'
import { ApiService } from './api.service'
import { pipeline } from '@xenova/transformers'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ang-eslint'
  // name:any;
  a = 5
  b = 10

  ngOnInit() {
    // const greeting = "Hello, world!"
  }

  inputText: string = ''
  inputText1: string = ''
  generatedText: string = ''
  translatedText: string = ''
  userText: string = ''
  useCases: string[] = []
  isLoading: boolean = false
  summarizedText: string = ''

  constructor(private huggingfaceService: ApiService) {}

  // Method to call Hugging Face API
  onGenerateText(): void {
    this.huggingfaceService.getTextGeneration(this.inputText1).subscribe(
      (response: { generated_text: string }[]) => {
        this.generatedText = response[0].generated_text
      },
      (error: any) => {
        console.error('Error:', error)
      },
    )
  }

  // onSubmit() {
  //   this.huggingfaceService.translateText(this.inputText).subscribe(
  //     (      response: any) => {
  //       // Assuming the translated text is returned under the `generated_text` key

  //       this.translatedText = response[0].translation_text || 'No translation available.';
  //     },
  //     (      error: any) => {
  //       console.error(error);
  //       this.translatedText = 'Error occurred while translating.';
  //     }
  //   );
  // }

  onSubmit() {
    this.huggingfaceService.summarizeText(this.inputText).subscribe(
      (response: any) => {
        // Assuming the summarized text is returned under the 'summary_text' key
        this.summarizedText =
          response[0]?.generated_text || 'No summary available.'
      },
      (error: any) => {
        console.error(error)
        this.summarizedText = 'Error occurred while summarizing.'
      },
    )
  }
}
