import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PollsService } from '../../auth/polls/services/polls.service';
import { Poll } from '../../auth/polls/models/poll.model';

@Component( {
  selector: 'app-poll-participation',
  templateUrl: './poll-detail.component.html',
  styleUrls: [ './poll-detail.component.css' ]
} )
export class PollDetailComponent implements OnInit {
  poll: Poll;
  userAnswer: any;

  constructor( public _activatedRoute: ActivatedRoute,
               private _pollsService: PollsService ) {

  }

  ngOnInit() {

    this._activatedRoute.params.subscribe( params => {
      const pollID: number = params[ 'id' ];
      this._pollsService.getPollById( pollID ).subscribe(
        ( data ) => {
          this.poll = data;
        },
        err => {
          console.log( err );
        }
      );
    } );
  }

  onClickSendVote( event: Event ) {
    event.preventDefault();
    console.log( 'Estamos listos chicos para enviar al servidor,', this.userAnswer );
  }
}
