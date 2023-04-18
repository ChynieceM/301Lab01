import HornedBeast from './HornedBeast';

//this is the main component that has 2 hornbeast components with 2 properties each
function Main() {
    return (
        <div>
            <main> Main </main>
            <HornedBeast title="Wooly-Mammonth" description="This wooly mammonth is named Peaches well known from the movie Ice Age" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnckTYm2kmp22DaOiX-KE6rVk0vzgaMgnMn3iu_jqj5g&usqp=CAU&ec=48600112" />

            <HornedBeast title="Elephant" description="This elephant cartoon is from the movie Dumbo" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2zlDkToJKOJiJGhocDM5dZ7nMG57RS6KETxwxj3bCIg&usqp=CAU&ec=48600112" />

        </div>
    );
}

export default Main;
