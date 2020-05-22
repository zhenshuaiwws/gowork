import React, { Component } from "react";
import "./links.css";

export class Links extends Component {
  githubs = [
    {
      groupName: "产品 GitHub",
      groupClass: "group--product",
      children: [
        {
          name: "wt-rd-agile-sky",
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
      ],
    },
    {
      groupName: "库 GitHub",
      groupClass: "group--library",
      children: [
        {
          name: "ngx-tethys",
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
              url: "http://lib.worktile.live/ngx-styx",
            },
          ],
        },
        {
          name: "ngx-planet",
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
        {
          name: "tethys/icons",
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
      ],
    },
  ];

  links = [
    {
      name: "Jenkins",
      url: "http://52.82.70.15/view/Frontend-CD/job/wt-rd-agile-sky-CD-job/",
    },
    {
      name: "alpha",
      url: "http://at.worktile.live/",
    },
    {
      name: "beta",
      url: "http://web-beta.worktile.com/",
    },
  ];

  render() {
    return (
      <div className="container">
        {this.githubs.map((group) => (
          <div className={group.groupClass + " group"}>
            <div className="group-name">{group.groupName}</div>
            {group.children.map((item) => (
              <div className="group-item">
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
        <div className="group group--link">
          {this.links.map((n) => (
            <div>
              <a href={n.url} target="_blank" rel="noopener noreferrer">
                {n.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
