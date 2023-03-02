import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
    <Container>
        <Header title="About the author" />
        <Section
            title="Ihor Domnich"
            body={
                <>
                    <p>
                        I'm from Ukraine. I love music, football and computer games. In Ukraine, he graduated from the university at the faculty of programming, but he did not work in his specialty and everything was forgotten. And now I want to try myself in Frontend Developer.
                    </p>

                </>
            }
        />
    </Container>
);