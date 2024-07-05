async function okene(){
    const githuburl = "https://api.github.com"; //
    
    let elieP = fetch(`${githuburl}/users/elie`);

    let joelP = fetch(`${githuburl}/users/joelburton`);

    let badurl = fetch("http://definitelynotarealsite.com");

    let anotherbadurl = fetch("http://definitelynotarealsite.com");

    let ketqua = await Promise.allSettled([
        elieP,
        joelP,
        badurl,
        anotherbadurl,
    ]);

    console.log(ketqua);
    const fulfilled = ketqua.filter((r) => r.status === "fulfilled");
    const rejected = ketqua.filter((r) => r.status === "rejected");
    console.log(fulfilled);
    console.log(rejected);
}