# Helper to generate structured question variations with rich details
def create_question_factory(category):
    def factory(add_func, items):
        count = 0
        for item in items:
            diff = item.get("diff", "Beginner")
            topic = item.get("topic", "General")
            qtype = item.get("type", "Coding")
            text = item.get("q")
            hints = item.get("hints", ["Think about edge cases.", "Consider optimal time and space complexity."])
            sol = item.get("sol", "")
            exp = item.get("exp", "")
            code = item.get("code", "")
            examples = item.get("examples", [])
            options = item.get("options", [])
            correctAnswer = item.get("correctAnswer", None)
            timeComplexity = item.get("timeComplexity", None)
            spaceComplexity = item.get("spaceComplexity", None)
            tags = item.get("tags", [category.lower().replace(" ", "-"), topic.lower().replace(" ", "-")])

            add_func(
                category,
                diff,
                topic,
                qtype,
                text,
                hints,
                sol,
                exp,
                code=code,
                examples=examples,
                options=options,
                correctAnswer=correctAnswer,
                timeComplexity=timeComplexity,
                spaceComplexity=spaceComplexity,
                tags=tags
            )
            count += 1
        return count
    return factory
