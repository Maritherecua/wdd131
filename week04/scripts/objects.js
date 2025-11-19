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
            schedule: "Mon/Wed/Fri 10:00AM - 11:00AM"},
        {
            sectionNumber: "002",
            enrolled: 80,
            instructor: "Sarah Johnson",
            schedule: "Tue/Thu 1:00PM - 2:30PM"},
        {
            sectionNumber: "003",
            enrolled: 70,
            instructor: "David Lee",
            schedule: "Mon/Wed 3:00PM - 4:30PM"}]};
function setCourseInfo(course) {
    document.getElementById("course-code").textContent = course.code;
    document.querySelector("#courseName").innerHTML = `${course.code} - ${course.title}`;
}
/*This code separates the rendering using a mapping function and a template function for better organization and readability. Builds rows*/
function sectionTemplate(section) {
    return `<tr>
        <td>${section.sectionNumber}</td>
        <td>${section.enrolled}</td>
        <td>${section.instructor}</td>
        <td>${section.schedule}</td>
    </tr>`;

}
function renderSections(sections) {
const html = sections.map(sectionTemplate).join("");
document.querySelector("#sections tbody").innerHTML = html.join("");
}
setCourseInfo(aCourse);
renderSections(aCourse.sections);