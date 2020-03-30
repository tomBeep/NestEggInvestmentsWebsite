import {Component, OnInit} from '@angular/core';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-client-references',
  templateUrl: './client-references.component.html',
  styleUrls: ['./client-references.component.css']
})
export class ClientReferencesComponent implements OnInit {

  faQuoteLeft = faQuoteLeft;
  faQuoteRight = faQuoteRight;

  references : reference[] = [];
  selectedReference: reference = null;


  constructor() {
    this.references.push(new reference("J & S Auckland","We had been thinking about our retirement planning for a while but we were nervous to seek help from a financial advisor. Once we met Dean we were immediately at ease and found him very approachable and knowledegable about financial planning. He was also very transparent about his fees and the services he provided. He provided an excellent financial model for us to assess our situation now and in the future. We highly recommend Dean to help you to financial freedom."));
    this.references.push(new reference("EG, Dunedin","I’d recommend Dean to anyone seeking independent financial advice. He responded swiftly to my query, laid out the different options clearly and simply, and really helped me to figure out how to move forward with my investment portfolio. It was such a relief to get prompt, clear, actionable, and unbiased financial advice. If I need more advice in the future, I shan’t hesitate to contact Dean again!"));
    this.references.push(new reference("CK and LF, Albany","We are happy to endorse everything said by other satisfied clients – Dean’s plain speaking, jargon free approach etc.    One of the first comments he made was “I’m going to tell you something you may not want to hear” and we thought “Great!  No nonsense from the start.”    But at the same time he is client centred in that when we changed our minds about something he had recommended (because we had reflected further on our ultimate goals) he didn’t try to dissuade us.\n" +
      "\n" +
      "It is a relief to have found someone we feel we can trust, and return to, for help with these important matters."));
    this.references.push(new reference("SGH and JMH, Matakawau","Why choose Dean? We would do so again and recommend him to others because:\n" +
      "\n" +
      "Communications were prompt, and fees clear from the outset\n" +
      "He was very thorough in assessing our circumstances and ambitions before providing any advice\n" +
      "He respected the investment portfolio we had in place before we met him, and our rationale for having it, but proposed some readily understandable adjustments\n" +
      "The Investment Balancing tool provided as part of his initial fee will enable us to manage our ongoing investment portfolio ourselves, whilst knowing that he will be available as our ‘guardian angel’ should we need him to assist further"));
    this.references.push(new reference("NB, Hamilton","I approached Dean to give me some financial guidance and direction. Nest Egg Investments is listed on Mary Holm’s (well known personal finance journalist) website https://maryholm.com/advisers/ as having provided guarantees around fees and advice which is reassuring. I found the fees were transparent and Dean was very easy to deal with even though I’m not based in Auckland. He produced written financial advice that I can action and manage myself, along with a financial model that can be adjusted for different scenarios. Dean also suggested some investments that I can drip feed into as funds allow. I would recommend obtaining advice from him and having a financial model created to help reach your financial goals."));
    this.references.push(new reference("C&E, North Shore","We had been searching for an Independent Financial Adviser like Dean for many years. He is down to earth and made the process easy to understand and stress free with his transparent price model, language we could understand, and the ability to come to us. We now feel confident in the knowledge and advice he has given us that we are on the right track to financial success, all thanks to Dean!"));
    this.references.push(new reference("Deirdre and Michael, Mt. Albert","We decided to shop the market and talk with a number of different financial advisors before making our decision on who we felt would be right for us. We decided to go with Dean because we really liked his approach to talking investment, he has a way of cutting through the noise and making everything clear, understandable and accessible. Not only that but he went over and above to visit us at our home for our initial consultation and took the time to answer every and any questions we had, big or small before making our decision. Following our consultation we received a personalized investment plan tailored to our goals and risk profile and Dean talked us through each aspect of the plan before setting it in motion so we knew exactly what we needed to do. We are currently implementing our investment plan and everything is ticking along nicely. A final note on Dean is that we know he is only ever a call or email away, he’s quick to respond and answer any queries which is very reassuring, we would be happy to recommend Nest Egg Investments to anybody on their investment portfolio journey!"));
    this.references.push(new reference("SP & RB, Takapuna","We sought Dean’s advice in the run-up to retirement and are very happy with his help. It was a relief to find someone who’s unusually transparent with fees on his website. Dean quickly came up with investment & financial suggestions that are really well tailored to our circumstances and make sense to us. His Financial Model tool is incredibly useful as we rearrange things now, and will continue to be so as we tweak things. We look forward to checking in with Dean periodically in future"));
    this.references.push(new reference("Geoff M, Wellington","I highly recommend Dean to anyone seeking independent financial advice.\n" +
      "\n" +
      "He created a detailed financial model for us based on our existing investment portfolio and provided suggestions and guidance for changes that would help us meet our future financial objectives. This was all done in a highly professional manner and at a reasonable cost. We will continue to call upon Dean whenever we need an independent view on any aspect of our investment portfolio."));
    this.references.push(new reference("M&L, West Auckland","Dean helped us clarify our thinking regarding our retirement planning, and the comprehensive model he provided was very helpful."));
    this.references.push(new reference("KP, Canterbury","The model Dean produced for me has been really helpful in giving me confidence that I am on the right track for retirement planning and allows me to test various possible scenarios as life changes – I can see that it will be a useful tool for at least the next 15 years. I know that it is realistic and based on real world data and Dean was very efficient in producing it for me. I highly recommend getting a model done for yourself"));
    this.selectedReference = this.references[0];
  }


  ngOnInit(): void {
  }

}

class reference {
  author: string;
  text: string;

  constructor(author: string, text: string) {
    this.text = text;
    this.author = author;
  }
}
