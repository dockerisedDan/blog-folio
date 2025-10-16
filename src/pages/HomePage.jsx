import { useState } from "react";
import PageWrapper from "../components/PageWrapper";

export default function HomePage() {
    const [counter, setCounter] = useState(0)

    return (
        <PageWrapper>
            <h1>value: {counter}</h1>
            <button onClick={() => setCounter(counter+1)}>Increment</button>
        </PageWrapper>
    )
}
