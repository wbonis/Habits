// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Import Services
import { HabitsService } from '../../services/habits.service';

// Import Models
import { Habits } from '../../domain/habits_db/habits';

// START - USED SERVICES
/**
* HabitsService.create
*	@description CRUD ACTION create
*
* HabitsService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* HabitsService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a  Habits
 */
@Component({
    selector: 'app-habits-edit',
    templateUrl: 'habits-edit.component.html',
    styleUrls: ['habits-edit.component.css']
})
export class HabitsEditComponent implements OnInit {
    item: any = {};
    itemDoc: AngularFirestoreDocument<Habits>;
    isNew: Boolean = true;
    formValid: Boolean;

    


    constructor(
        private habitsService: HabitsService,
        private route: ActivatedRoute,
        private location: Location) {
        // Init list
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.isNew = false;
                this.itemDoc = this.habitsService.get(id);
                this.itemDoc.valueChanges().subscribe(item => this.item = item);

            }
            // Get relations
        });
    }



    /**
     * Save Habits
     *
     * @param {boolean} formValid Form validity check
     * @param Habits item Habits to save
     */
    save(formValid: boolean): void {
        this.formValid = formValid;
        if (formValid) {
            if (this.isNew) {
                // Create
                this.habitsService.create(this.item);
                this.isNew = false;
            } else {
                // Update
                this.habitsService.update(this.itemDoc, this.item);
            }
            this.goBack();
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }

}
