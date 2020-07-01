import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: [
    './about.component.css',
    '../app.component.css',
    '../big-nav-button/big-nav-button.component.css',
    './edu-item.css',
    './lang-item.css',
    './skill-item.css',
  ],
  //Prevents encapsulation of css to allow for dynamic injected html to use css
  //from the styleUrls above
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  async OpenSection(section, event) {
    this.ResetSections();

    //Add active to nav button
    $(event.target).addClass('active');

    /*
     * Fetch both the html template and json file in parallel,
     * but wait for both to be fetched
     */
    let [htmlTemplate, jsonFile] = await Promise.all([
      //Get html template for section
      $.ajax({
        url: './assets/templates/' + section.toLowerCase() + '.html',
        type: 'GET',
        datatype: 'html',
        success: function (data) {
          return data;
        },
      }),

      //Get json file with the content
      $.ajax({
        url: './assets/about.json',
        type: 'GET',
        datatype: 'json',
        success: function (data) {
          return data;
        },
      }),
    ]);

    console.log(htmlTemplate);
    console.log(jsonFile);

    //Append content to the template

    console.log(jsonFile[section.toLowerCase()]);
    jsonFile[section.toLowerCase()].forEach((element) => {
      var html = $(htmlTemplate);
      Object.keys(element).forEach((key) => {
        console.log(key + ' : ' + element[key]);
        if (key == 'img') {
          $(html)
            .find('#' + key)
            .attr('src', element[key]);
        } else {
          $(html)
            .find('#' + key)
            .text(element[key]);
        }
        $('#content').append(html);

        /* Don't wrap the languages since there are only 2 */
        if (section.toLowerCase() == 'languages') {
          $('#content').addClass('no-wrap');
        }
      });
    });
  }

  ResetSections() {
    //Remove all elements from 'content'
    $('#content').html('');
    $('#content').removeClass('no-wrap');
    //Remove all 'active' classes from the buttons
    $('#about').find('.EmptyButton').removeClass('active');
  }
}
