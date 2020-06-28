import React, { Component } from "react";
import "./links.css";
// import "./links.scss";

export class Links extends Component {
  githubs = [
    {
      groupName: "PRODUCT",
      groupClass: "group--product",
      children: [
        {
          name: "wt-rd-agile-sky",
          url: "https://github.com/atinc/wt-rd-agile-sky",
          urls: [
            {
              name: "Repository",
              url: "https://github.com/atinc/wt-rd-agile-sky",
            },
            {
              name: "PR",
              url: "https://github.com/atinc/wt-rd-agile-sky/pulls",
            },
          ],
        },
        {
          name: "wt-sky-portal",
          url: "https://github.com/atinc/wt-sky-portal",
          urls: [
            {
              name: "Repository",
              url: "https://github.com/atinc/wt-sky-portal",
            },
            {
              name: "PR",
              url: "https://github.com/atinc/wt-sky-portal/pulls",
            },
          ],
        },
      ],
    },
    {
      groupName: "LIBRARY",
      groupClass: "group--library",
      children: [
        {
          name: "ngx-tethys",
          url: "https://github.com/atinc/ngx-tethys",
          urls: [
            {
              name: "Repository",
              url: "https://github.com/atinc/ngx-tethys",
            },
            {
              name: "PR",
              url: "https://github.com/atinc/ngx-tethys/pulls",
            },
            {
              name: "Doc",
              url: "http://lib.worktile.live/ngx-tethys/#/introduction",
            },
          ],
        },
        {
          name: "ngx-styx",
          url: "https://github.com/atinc/ngx-styx",
          urls: [
            {
              name: "Repository",
              url: "https://github.com/atinc/ngx-styx",
            },
            {
              name: "PR",
              url: "https://github.com/atinc/ngx-styx/pulls",
            },
            {
              name: "Doc",
              url: "http://lib.worktile.live/ngx-styx/",
            },
          ],
        },
        {
          name: "icons",
          url: "https://github.com/atinc/wt-design-icons",
          urls: [
            {
              name: "Repository",
              url: "https://github.com/atinc/wt-design-icons",
            },
            {
              name: "PR",
              url: "https://github.com/atinc/wt-design-icons/pulls",
            },
            {
              name: "Doc",
              url: "http://lib.worktile.live/icons/",
            },
          ],
        },
        {
          name: "ngx-planet",
          url: "https://github.com/worktile/ngx-planet",
          urls: [
            {
              name: "Repository",
              url: "https://github.com/worktile/ngx-planet",
            },
            {
              name: "PR",
              url: "https://github.com/worktile/ngx-planet/pulls",
            },
          ],
        },
      ],
    },
  ];

  links = [
    {
      name: "Alpha",
      url: "http://at.worktile.live/",
    },
    {
      name: "Jenkins",
      url:
        "http://jenkins.worktile.live/view/Frontend-CD/job/wt-rd-agile-sky-CD-job/",
    },
    {
      name: "Beta",
      url: "http://web-beta.worktile.com/",
    },
    {
      name: "Ant Design",
      url: "https://ng.ant.design/components/button/zh",
    },
  ];

  render() {
    return (
      <div className="container">
        {this.githubs.map((group) => (
          <div className="group">
            <div className="group-name">{group.groupName}</div>
            {group.children.map((item) => (
              <div className="repository-item">
                <span className="item-name">{item.name}</span>
                {item.urls?.map((n) => (
                  <a
                    className="item-url"
                    href={n.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {n.name}
                  </a>
                ))}
              </div>
            ))}
          </div>
        ))}
        <div className="group">
          <div className="group-name">LINKS</div>
          <div className="link-item-container">
            {this.links.map((n) => (
              <a href={n.url} target="_blank" rel="noopener noreferrer">
                {n.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
