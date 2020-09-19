import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Import Services
import { HabitsService } from '../../services/habits.service';
// Import Models
import { Habits } from '../../domain/habits_db/habits';

// START - USED SERVICES
/**
* HabitsService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* HabitsService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Habits
 * @class HabitsListComponent
 */
@Component({
    selector: 'app-habits-list',
    templateUrl: './habits-list.component.html',
    styleUrls: ['./habits-list.component.css']
})
export class HabitsListComponent implements OnInit {
    list: Observable<any[]>;
    search: any = {};
    idSelected: string;
    constructor(
        private habitsService: HabitsService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.list = this.habitsService.list();
    }

    /**
     * Select Habits to remove
     *
     * @param {string} id Id of the Habits to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Habits
     */
    deleteItem() {
        this.habitsService.remove(this.idSelected);
    }

}
