from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    KeepTogether,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "assets" / "cv" / "Maroka_Musa_Calvin_CV.pdf"
FONT_REGULAR = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
FONT_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"


def bullet(text, styles):
    return Paragraph(f"- {text}", styles["Body"])


def section(title, styles):
    return Paragraph(title.upper(), styles["Section"])


def build_cv():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    pdfmetrics.registerFont(TTFont("DejaVu", FONT_REGULAR))
    pdfmetrics.registerFont(TTFont("DejaVu-Bold", FONT_BOLD))

    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        rightMargin=13 * mm,
        leftMargin=13 * mm,
        topMargin=11 * mm,
        bottomMargin=11 * mm,
        title="Maroka Musa Calvin CV",
        author="Maroka Musa Calvin",
    )

    base = getSampleStyleSheet()
    styles = {
        "Name": ParagraphStyle(
            "Name",
            parent=base["Title"],
            fontName="DejaVu-Bold",
            fontSize=20,
            leading=23,
            textColor=colors.HexColor("#0f172a"),
            spaceAfter=4,
        ),
        "Role": ParagraphStyle(
            "Role",
            parent=base["BodyText"],
            fontName="DejaVu",
            fontSize=9.6,
            leading=12,
            textColor=colors.HexColor("#334155"),
            spaceAfter=8,
        ),
        "Section": ParagraphStyle(
            "Section",
            parent=base["Heading2"],
            fontName="DejaVu-Bold",
            fontSize=9.5,
            leading=11,
            textColor=colors.HexColor("#0369a1"),
            spaceBefore=7,
            spaceAfter=4,
        ),
        "Body": ParagraphStyle(
            "Body",
            parent=base["BodyText"],
            fontName="DejaVu",
            fontSize=8.4,
            leading=10.4,
            textColor=colors.HexColor("#1f2937"),
            spaceAfter=3,
        ),
        "Small": ParagraphStyle(
            "Small",
            parent=base["BodyText"],
            fontName="DejaVu",
            fontSize=8,
            leading=10,
            textColor=colors.HexColor("#475569"),
        ),
        "ItemTitle": ParagraphStyle(
            "ItemTitle",
            parent=base["BodyText"],
            fontName="DejaVu-Bold",
            fontSize=8.8,
            leading=10.6,
            textColor=colors.HexColor("#0f172a"),
            spaceBefore=3,
            spaceAfter=2,
        ),
    }

    story = []
    story.append(Paragraph("MAROKA MUSA CALVIN", styles["Name"]))
    story.append(
        Paragraph(
            "Junior Software Developer | Backend | Full-Stack | Cloud | Machine Learning",
            styles["Role"],
        )
    )
    story.append(
        Paragraph(
            "South Africa | your-email@example.com | +27 XX XXX XXXX | GitHub: add link | LinkedIn: add link | Portfolio: add link",
            styles["Small"],
        )
    )
    story.append(Spacer(1, 3))

    story.append(section("Professional Summary", styles))
    story.append(
        Paragraph(
            "Computer Science student and junior developer with experience in Python, backend development, full-stack projects, databases, APIs, cloud concepts, and machine learning. Strong interest in building practical software systems, including booking platforms, REST APIs, real-time applications, GPS tracking, and Automatic Speech Recognition research.",
            styles["Body"],
        )
    )

    story.append(section("Technical Skills", styles))
    skills = [
        ["Languages", "Python, JavaScript, HTML, CSS, SQL"],
        ["Backend", "REST APIs, Django, server-side logic, authentication, request handling"],
        ["Databases", "MySQL, PostgreSQL concepts, Firebase, CRUD operations"],
        ["Machine Learning", "NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, data pipelines"],
        ["Cloud & Tools", "AWS, Boto3, Git, GitHub, Firebase Hosting, deployment workflows"],
    ]
    table = Table(
        [[Paragraph(f"<b>{label}</b>", styles["Body"]), Paragraph(value, styles["Body"])] for label, value in skills],
        colWidths=[35 * mm, 140 * mm],
    )
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LINEBELOW", (0, 0), (-1, -2), 0.25, colors.HexColor("#e2e8f0")),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
                ("TOPPADDING", (0, 0), (-1, -1), 2),
            ]
        )
    )
    story.append(table)

    story.append(section("Experience", styles))
    story.append(Paragraph("Computer Science Tutor", styles["ItemTitle"]))
    story.append(bullet("Supported students with programming, debugging, database concepts, and problem-solving.", styles))
    story.append(bullet("Explained technical concepts in a simple and practical way to improve understanding.", styles))
    story.append(bullet("Assisted students with assignments, coding exercises, and exam preparation.", styles))

    story.append(section("Selected Projects", styles))
    projects = [
        (
            "Northern Sotho ASR System",
            "ASR research project using Wav2Vec-XLS-R 300M to convert Northern Sotho speech into text transcripts.",
        ),
        (
            "Makgobelo Lodge Booking System",
            "Full-stack booking system for room availability, guest bookings, and admin management.",
        ),
        (
            "Scalable REST API Booking Management System",
            "Backend API project focused on booking data, request handling, validation, and CRUD operations.",
        ),
        (
            "Real-Time Chat Application",
            "Messaging application focused on real-time communication and responsive frontend behavior.",
        ),
        (
            "GPS Tracking System",
            "Location-based project designed around tracking data, updates, and monitoring workflows.",
        ),
    ]
    for title, desc in projects:
        story.append(KeepTogether([Paragraph(title, styles["ItemTitle"]), Paragraph(desc, styles["Body"])]))

    story.append(section("Certifications", styles))
    certs = [
        (
            "Python for Machine Learning & Data Science Masterclass - Udemy, 2026",
            "Training in Python data science and machine learning, including real-world datasets, feature engineering, classification, regression, visualization, NumPy, Pandas, Matplotlib, Seaborn, and Scikit-learn.",
        ),
        (
            "Python Programming for AWS: Learn Python with AWS and Boto3 - Udemy, 2026",
            "Training in Python, AWS, Boto3, cloud automation, and working with AWS services for backend and cloud-based applications.",
        ),
        (
            "Python on the Backend - Udemy, 2026",
            "Training in backend Python development, server-side logic, request handling, and API-based applications.",
        ),
    ]
    for title, desc in certs:
        story.append(KeepTogether([Paragraph(title, styles["ItemTitle"]), Paragraph(desc, styles["Body"])]))

    story.append(section("Education", styles))
    story.append(Paragraph("Computer Science Student", styles["Body"]))

    doc.build(story)


if __name__ == "__main__":
    build_cv()
