import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  VERSION,
  ViewChild,
} from '@angular/core';
// import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service'
import { Router, ActivatedRoute } from '@angular/router';

import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  FormArray,
  FormGroupDirective,
  NgForm,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { ContStateCityService } from '../../services/cont-state-city.service';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { isThisSecond, yearsToMonths } from 'date-fns';
import { Country, State, City } from 'country-state-city';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { saveAs } from 'file-saver';

import { environment } from '../../../environments/environment';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { delay } from 'rxjs/operators';
var $: any;
@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent implements OnInit {

  // @ViewChild('notesForm') notesForm:NgForm;
  other_source:any;
  date_duration:any;
  fdate:any;
  fmonth:any;
  Parrayelement:any;
  permanent_address_arr:any=[];
  open_Modal:boolean=false;
  selected_source_O:any;
  pPinselected:any;
  pstreetselected:any;
  parray:any;
  paddress_pincode:any;
  paddress_pincode2:any;
  pstreet_address:any;
  pstreet_address2:any;
// sameAsPresentAddress:boolean=false;
pCountryselected:any="India";
pStateselected:any;
pCityselected:any;
  Countryselected:any="India";
  CountryStateselected:any;
  selectedattach:any;
  selectedattachfile:boolean=false;
  private apiUrl = environment.apiUrl;
  reqBody: any;
  alert: boolean = false;
  status: boolean = false;
  [x: string]: any;
  editMode: boolean = false;
  aadharmode:boolean=false;
  panmode:boolean=false;

joiningMode:boolean=false;

  editNotesId: any;
  docerr1="aadhar card number should be 12 digits";
  age: any;
  age_error = '';
  idn:any;
  panerr="please enter valid pan card number";
  dlerr="";
  selected_doc:any;
  passporterr="";
  docOptions = ["Aadhaar Card","Pan Card","Driving Licence","Passport"]


  //  selectedOption="Select Attachment" {id:-1,name:"Select Attachment"}
  attachOptions = ["Resume","Aadhaar Card","Pan Card","High School certificate","Higher Secondary certificcate",
                 "Graduation","Post Graduation","candidate photograph","Previous organization Appointment letter","last 3 months Salary Slip",
                "Resignation letter / screenshot of resignation mail send by candidate and also approved by organization","Passport"]
 
  currentNotes: any;
  message = '';

  
  fetchAttachment: any;
  fetchNotes: any;
  arr: any;
inum:any;
  email: any;
  loading: boolean = false; //flag variable
  file!: File;

  //
  x: any;
  z: any;
  y: any;

  //7dec start
  @ViewChild('country')
  countryNew!: ElementRef;

  @ViewChild('city')
  cityNew!: ElementRef;

  @ViewChild('state')
  stateNew!: ElementRef;

  name = 'Angular ' + VERSION.major;
  Newcountries = Country.getAllCountries();
  Newstates: any;
  Newcities: any;


  c: any;
  s: any;
  ci: any;

  stateInfo: any = [];
  countryInfo: any = [];
  cityInfo: any = [];

  pstateInfo: any = [];
  pcountryInfo: any = [];
  pcityInfo: any = [];
  educationForm: any = FormGroup;
  experienceForm: any = FormGroup;
  documentForm: any;

  addressForm: any = FormGroup;
  pAddressForm:any=FormGroup;
  notesForm: any = FormGroup;
  attachmentForm: any = FormGroup;

  check = false;

  CountryName: any;
  StateName: any;
  city: any;

  Vcountry: any;
  Vstate: any;
  Vcity: any;

  //.......................................................
  DateofCompletion: any;
  data: any;
  registerForm: any = FormGroup;
  submitted = false;
  email1: any;
noteValid:boolean=false;
attachmentValid:boolean=false;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private country: ContStateCityService,
    private httpClient: HttpClient,
    private ngxService: NgxUiLoaderService,
    
  ) {
    
  }

  ngOnInit(): void {

    
    
 



  }
}