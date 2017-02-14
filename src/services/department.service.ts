export class DepartmentService {

  list: Array<any>;

  constructor() {

    this.list = [
      { name: 'คลินิกตรวจสุขภาพทั่วไป', selected: false },
      { name: 'คลินิกโรคเฉพาะทาง', selected: true },
      { name: 'คลินิกทันตกรรม', selected: false },
      { name: 'คลินิกกายภาพบำบัด', selected: false },
      { name: 'คลินิกทันตกรรม', selected: true }
    ];

    for(let i = 0; i < this.list.length; i++) {
      this.list[i].id = i+1;
      this.list[i].currentQueue = Math.floor(Math.random()*40)
      this.list[i].yourQueue = Math.floor(Math.random()*40)
    }
  }

}
