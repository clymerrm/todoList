import React, { Component } from "react";

class Locators extends Component {
    render() {
         if (window.location.pathname.includes('compare')) {
            return (
                <div>
                    <p><b>New Task Name Input</b><br/>
                        (NAME, "title")<br/>
                        (CSS, "[data-test-key=TaskNameInput]")
                    </p>
                    <p><b>Create Task Button</b><br/>
                        (CSS, "#root div div form input.btn")<br/>
                        (CSS, "[data-test-key=CreateTaskButton]")
                    </p>
                    <p><b>New Task Name Input</b><br/>
                        (XPATH, "//div[contains(@style, 'text-decoration: none')][1]"))<br/>
                        (XPATH, "//div[@data-test-key=Active][1]")
                    </p>
                    <p><b>New Task Name Input</b><br/>
                        (XPATH, "//div[contains(@style, 'text-decoration: line-through')][3]")))<br/>
                        (XPATH, "//div[@data-test-status='Completed'][3]/p/span[@data-test-key='DueDate']"))
                    </p>
                    <p><b>New Task Name Input</b><br/>
                        (ID, “delete”)<br/>
                        (CSS, “[data-test-key=learnabouttestcafeitem] [data-test-key=DeleteButton]”)
                    </p>
                </div>
            )
        } else if (window.location.pathname.includes('latest')) {
             return (
                 <div>
                     <p><b>New Task Name Input</b><br/>
                         (CSS, "[data-test-key=TaskNameInput]")
                     </p>
                     <p><b>Create Task Button</b><br/>
                         (CSS, "[data-test-key=CreateTaskButton]")
                     </p>
                     <p><b>New Task Name Input</b><br/>
                         (XPATH, "//div[@data-test-key=Active][1]")
                     </p>
                     <p><b>New Task Name Input</b><br/>
                         (XPATH, "//div[@data-test-status='Completed'][3]/p/span[@data-test-key='DueDate']"))
                     </p>
                     <p><b>New Task Name Input</b><br/>
                         (CSS, “[data-test-key=learnabouttestcafeitem] [data-test-key=DeleteButton]”)
                     </p>
                 </div>
             )
         } else {
            return (
                <div>
                    <p><b>New Task Name Input</b><br/>
                        (NAME, "title")
                    </p>
                    <p><b>Create Task Button</b><br/>
                        (CSS, "#root div div form input.btn")
                    </p>
                    <p><b>New Task Name Input</b><br/>
                        (XPATH, "//div[contains(@style, 'text-decoration: none')][1]"))
                    </p>
                    <p><b>New Task Name Input</b><br/>
                        (XPATH, "//div[contains(@style, 'text-decoration: line-through')][3]")))
                    </p>
                    <p><b>New Task Name Input</b><br/>
                        (ID, “delete”)<br/>
                        BUT WHICH ONE?
                    </p>
                </div>
            )
        }
    }
}

export default Locators;
