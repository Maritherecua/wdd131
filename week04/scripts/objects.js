let aCourse = {
    code: "WDD131",
    title: "Web Development and Design I",
    instructor: "Matthew Kearl.",
    credits: 2,
    sections: [
        {
            sectionNumber: "001",
            enrolled: 85,
            instructor: "Matthew Kearl",
            room: "D 305"
        }
    ]
};

function setCourseInfo(course) {
    document.querySelector("#courseName").innerHTML = `${course.code} - ${course.title}`;
}

/*This code separates the rendering using a mapping function and a template function for better organization and readability. Builds rows*/
function sectionTemplate(section) {
    return `<tr>
        <td>${section.sectionNumber}</td>
        <td>${section.enrolled}</td>
        <td>${section.instructor}</td>
        <td>${section.room}</td>
    </tr>`;
}

function renderSections(course) {
    const html = course.sections.map(sectionTemplate);
    document.querySelector("#sections tbody").innerHTML = html.join("");
}

setCourseInfo(aCourse);
renderSections(aCourse.sections);